import { Test, TestingModule } from '@nestjs/testing'
import { NotesManagementService } from './notes-management.service'
import { NotesMicroservice } from '../../../communication/infrastructure/microservices/notes.microservice'
import {
  AddNote,
  ModifiedNote,
  RequestId,
} from '../../../communication/infrastructure/types/notes-microservice'
import { Result } from 'typescript-result'

describe('NotesManagementService', () => {
  let notesManagementService: NotesManagementService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotesManagementService,
        {
          provide: NotesMicroservice,
          useValue: Object.defineProperty({}, 'notesService', {
            get: jest.fn(() => {
              return {
                GetAll: () => {
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
                Save: (param: AddNote) => {
                  if (!param.Title) throw new Error()
                  return {
                    Id: '4198f062-8da5-4757-a380-0f7f29692c42',
                    Title: param.Title,
                    State: 0,
                    Creator: 'FPonce',
                    CreationDate: {},
                    Updater: 'FPonce',
                    LastUpdateDate: {},
                  }
                },
                GetOne: (param: RequestId) => {
                  if (param.Id === '4198f062-8da5-4757-a380-0f7f29692c42')
                    return {
                      Id: '4198f062-8da5-4757-a380-0f7f29692c42',
                      Title: 'testing',
                      State: 0,
                      Creator: 'FPonce',
                      CreationDate: {},
                      Updater: 'FPonce',
                      LastUpdateDate: {},
                    }
                  if (!param.Id) return null
                  else throw new Error()
                },
                Update: (param: ModifiedNote) => {
                  if (!param.Title) throw new Error()
                  return {
                    Id: '4198f062-8da5-4757-a380-0f7f29692c42',
                    Title: param.Title,
                    State: 0,
                    Creator: 'FPonce',
                    CreationDate: {},
                    Updater: 'FPonce',
                    LastUpdateDate: {},
                  }
                },
                Delete: (param: RequestId) => {
                  if (!param.Id) throw new Error()
                  return Result.ok()
                },
              }
            }),
          }),
        },
      ],
    }).compile()

    notesManagementService = module.get<NotesManagementService>(
      NotesManagementService,
    )
  })

  it('should be defined', () => {
    expect(notesManagementService).toBeDefined()
  })

  it('should return notes array', async () => {
    const notes = await notesManagementService.getNotes()
    expect(notes.SimplifiedNotes.length).toBeGreaterThan(0)
  })

  it('should create a note', async () => {
    const Title = 'new note'
    const result = await notesManagementService.createNote({
      Title,
    })
    expect(result.getOrNull().Title).toBe(Title)
  })

  it('should fails on create', async () => {
    const Title = null
    const result = await notesManagementService.createNote({
      Title,
    })
    expect(result.getOrNull()).toBeNull()
  })

  it('should get a note by id', async () => {
    const id = '4198f062-8da5-4757-a380-0f7f29692c42'
    const result = await notesManagementService.getNoteById(id)
    expect(result.getOrNull().Id).toBe(id)
  })

  it('should fails on get a note by id', async () => {
    const id = '777777'
    const result = await notesManagementService.getNoteById(id)
    expect(result.getOrNull()).toBeNull()
  })

  it('should fails on get a note by id', async () => {
    const id = ''
    const result = await notesManagementService.getNoteById(id)
    expect(result.getOrNull()).toBeNull()
  })

  it('should update a note', async () => {
    const id = '4198f062-8da5-4757-a380-0f7f29692c42'
    const title = 'Updated'
    const result = await notesManagementService.updateNote(id, {
      title: title,
      state: 1,
    })
    expect(result.getOrNull().Title).toBe(title)
  })

  it('should fails on update a note', async () => {
    const id = '4198f062-8da5-4757-a380-0f7f29692c42'
    const title = ''
    const result = await notesManagementService.updateNote(id, {
      title: title,
      state: 1,
    })
    expect(result.getOrNull()).toBeNull()
  })

  it('should delete a note', async () => {
    const id = '4198f062-8da5-4757-a380-0f7f29692c42'
    const result = await notesManagementService.deleteNote(id)
    expect(result.getOrNull()).toBe(null)
  })

  it('should fails on delete a note', async () => {
    const id = ''
    const result = await notesManagementService.deleteNote(id)
    expect(result.getOrNull()).toBeNull()
  })
})
