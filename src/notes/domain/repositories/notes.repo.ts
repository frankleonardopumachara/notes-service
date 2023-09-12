import { Note } from '../entities/note'

export interface NotesRepo {
  save(note: Note): Promise<Note>

  getOneOrNull(noteId: string): Promise<Note | null>

  update(note: Note): Promise<Note>

  getAll(): Promise<Note[]>

  deleteOne(noteId: string): Promise<void>

  changeState(noteId: string): Promise<Note>
}
