import { Injectable } from '@nestjs/common'
import { CreateNoteDto } from '../dtos/create-note.dto'
import { UpdateNoteDto } from '../dtos/update-note.dto'
import { Result } from 'typescript-result'
import { NoteNotFound } from '../../domain/errors/note-not-found'
import { NotesMicroservice } from '../../../communication/infrastructure/microservices/notes.microservice'
import { SimplifiedNote } from '../../../communication/infrastructure/types/notes-microservice'
import { Note } from '../../../communication/infrastructure/types'

@Injectable()
export class NotesService {
  constructor(private notesMicroservice: NotesMicroservice) {}

  getNotes(): Promise<SimplifiedNote[]> {
    return this.notesMicroservice.notesService.GetAll()
  }

  async createNote(dto: CreateNoteDto): Promise<Result<Error, Note>> {
    try {
      const note = await this.notesMicroservice.notesService.Save(dto)
      return Result.ok(note)
    } catch (e) {
      return Result.error(e)
    }
  }

  async getNoteByIdOrFail(
    noteId: string,
  ): Promise<Result<NoteNotFound | Error, Note>> {
    try {
      const note = await this.notesMicroservice.notesService.GetOne({
        Id: noteId,
      })
      if (note === null) {
        return Result.error(new NoteNotFound())
      }
      return Result.ok(note)
    } catch (e) {
      return Result.error(e)
    }
  }

  async updateNote(
    noteId: string,
    dto: UpdateNoteDto,
  ): Promise<Result<Error, Note>> {
    try {
      const note = await this.notesMicroservice.notesService.Update({
        Id: noteId,
        Title: dto.title,
        State: dto.state,
      })
      return Result.ok(note)
    } catch (e) {
      return Result.error(e)
    }
  }

  async deleteNote(noteId: string): Promise<Result<Error, void>> {
    try {
      await this.notesMicroservice.notesService.Delete({ Id: noteId })
      return Result.ok()
    } catch (e) {
      return Result.error(e)
    }
  }
}
