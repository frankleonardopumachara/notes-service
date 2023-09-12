import { Test, TestingModule } from '@nestjs/testing'
import { NotesController } from './notes.controller'
import { NotesManagementService } from '../../application/services/notes-management.service'
import { CreateNoteDto } from '../../application/dtos/create-note.dto'
import { Result } from 'typescript-result'
import { NoteNotFound } from '../../application/errors/note-not-found'
import { UpdateNoteDto } from '../../application/dtos/update-note.dto'
import { NotFoundException } from '@nestjs/common'

describe('NotesController', () => {
  let notesController: NotesController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [
        {
          provide: NotesManagementService,
          useValue: {
            getNotes: () => {
              return {
                SimplifiedNotes: [
                  {
                    Id: 'c96f8bab-08e5-42f2-848c-379ae0793a5e',
                    Title: 'Nota 1',
                    State: 0,
                  },
                  {
                    Id: 'asdf1234-08e5-42f2-848c-379ae0793a5e',
                    Title: 'Nota 2',
                    State: 1,
                  },
                  {
                    Title: 'title changed',
                    State: 0,
                  },
                  {
                    Title: 'title changed',
                    State: 0,
                  },
                  {
                    Title: 'title changed',
                    State: 0,
                  },
                  {
                    Title: 'title changed',
                    State: 0,
                  },
                  {
                    Id: '4198f062-8da5-4757-a380-0f7f29692c42',
                    Title: 'testing',
                    State: 0,
                  },
                ],
              }
            },
            createNote: (dto: CreateNoteDto) => {
              if (!dto.Title) return Result.error(new Error())

              return Result.ok({
                Id: '4198f062-8da5-4757-a380-0f7f29692c42',
                Title: dto.Title,
                State: 0,
                Creator: 'FPonce',
                CreationDate: {},
                Updater: 'FPonce',
                LastUpdateDate: {},
              })
            },
            getNoteById: (noteId: string) => {
              if (noteId === '4198f062-8da5-4757-a380-0f7f29692c42')
                return Result.ok({
                  Id: '4198f062-8da5-4757-a380-0f7f29692c42',
                  Title: 'testing',
                  State: 0,
                  Creator: 'FPonce',
                  CreationDate: {},
                  Updater: 'FPonce',
                  LastUpdateDate: {},
                })
              if (noteId === '') return Result.error(new NoteNotFound())
              else throw new NoteNotFound()
            },
            updateNote: (noteId: string) => {
              if (!noteId) return Result.error(new Error())
              return Result.ok({
                Id: '4198f062-8da5-4757-a380-0f7f29692c42',
                Title: 'testing',
                State: 0,
                Creator: 'FPonce',
                CreationDate: {},
                Updater: 'FPonce',
                LastUpdateDate: {},
              })
            },
            deleteNote: (noteId: string) => {
              if (!noteId) return Result.error(new Error())
              if (noteId === '111') return Result.error(new NoteNotFound())
              return Result.ok()
            },
          },
        },
      ],
    }).compile()

    notesController = app.get<NotesController>(NotesController)
  })

  it('should be defined', () => {
    expect(notesController).toBeDefined()
  })

  it('should return notes array', async () => {
    const notes = await notesController.getNotes()
    expect(notes.SimplifiedNotes.length).toBeGreaterThan(0)
  })

  it('should create a note', async () => {
    const dto = new CreateNoteDto()
    const Title = 'new note'
    dto.Title = Title
    const note = await notesController.createNote(dto)
    expect(note.Title).toBe(Title)
  })

  it('should fails on create a note', async () => {
    const dto = new CreateNoteDto()
    const Title = ''
    dto.Title = Title
    const response = notesController.createNote(dto)
    expect(response).rejects.toBeInstanceOf(Error)
  })

  it('should get a note by id', async () => {
    const id = '4198f062-8da5-4757-a380-0f7f29692c42'
    const note = await notesController.getNoteById(id)
    expect(note).toBeDefined()
  })

  it('should fails to get a note by id', async () => {
    const id = ''
    const response = notesController.getNoteById(id)
    expect(response).rejects.toBeInstanceOf(NotFoundException)
  })

  it('should update a note', async () => {
    const id = '4198f062-8da5-4757-a380-0f7f29692c42'
    const dto = new UpdateNoteDto()
    dto.title = 'Updated'
    dto.state = 1
    const note = await notesController.updateNote(id, dto)
    expect(note).toBeDefined()
  })

  it('should fails on update a note', async () => {
    const id = ''
    const dto = new UpdateNoteDto()
    dto.title = 'Updated'
    dto.state = 1
    const response = notesController.updateNote(id, dto)
    expect(response).rejects.toBeInstanceOf(Error)
  })

  it('should delete a note', async () => {
    const id = '4198f062-8da5-4757-a380-0f7f29692c42'
    const note = await notesController.deleteNote(id)
    expect(note).toBeNull()
  })

  it('should fails on delete a note', async () => {
    const id = '111'
    const response = notesController.deleteNote(id)
    expect(response).rejects.toBeInstanceOf(NotFoundException)
  })

  it('should fails on delete a note', async () => {
    const id = ''
    const response = notesController.deleteNote(id)
    expect(response).rejects.toBeInstanceOf(Error)
  })
})
