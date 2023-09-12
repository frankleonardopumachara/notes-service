export interface NotesService {
  Save(param: AddNote): Promise<Note>

  GetAll(): Promise<SimplifiedNote[]>

  GetOne(param: RequestId): Promise<Note>

  Delete(param: RequestId): Promise<void>

  DeleteChecked(): Promise<void>

  ChangeState(param: NoteState): Promise<Note>

  Update(param: ModifiedNote): Promise<Note>
}

export interface RequestId {
  Id: string
}

export interface AddNote {
  Title: string
}

export interface SimplifiedNote {
  Id: string
  Title: string
  State: number
  NoteListId: string
}

export interface NoteState {
  Id: string
  State: number
}

export interface ModifiedNote {
  Id: string
  Title: string
  State: number
}

export interface Note {
  Id: string
  Title: string
  State: number
  NotesListId: string
  Creator: string
  Updater: string
}

export interface NotesListsService {
  Save(param: AddNoteList): Promise<NoteList>
}

export interface AddNoteList {
  Name: string
}

export interface NoteList {
  Id: string
  Name: string
  State: number
  Creator: string
  CreationDate: Date
  Updater: string
  LastUpdateDate: Date
}

export interface SettingsService {
  DeleteCompletedItems(): Promise<void>
}
