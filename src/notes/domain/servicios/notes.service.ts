import { Injectable } from '@nestjs/common'
import { NotesRepo } from '../repositories/notes.repo'
import { ICreateNote, Note } from '../entities/note'

@Injectable()
export class NotesService {
  constructor(private notesRepo: NotesRepo) {}

  save(param: ICreateNote): Promise<Note> {
    const note = new Note(param)

    if (note.isSaved()) {
      return this.notesRepo.update(note)
    }
    return this.notesRepo.save(note)
  }

  getOneOrNull(noteId: string): Promise<Note> {
    return this.notesRepo.getOneOrNull(noteId)
  }

  getAll(): Promise<Note[]> {
    return this.notesRepo.getAll()
  }

  deleteOne(noteId: string): Promise<void> {
    return this.notesRepo.deleteOne(noteId)
  }

  async changeState(noteId: string, newState: number): Promise<Note> {
    const note = await this.getOneOrNull(noteId)
    note.setState(newState)
    return this.notesRepo.changeState(noteId)
  }
}
