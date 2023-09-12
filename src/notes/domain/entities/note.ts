export interface ICreateNote {
  Id: string | null
  Title: string
  State: number
  NotesListId: string
  Creator: string
  CreationDate: Date
  Updater: string
  LastUpdateDate: Date
}

export class Note {
  Id: string | null
  Title: string
  State: number
  NotesListId: string
  Creator: string
  CreationDate: Date
  Updater: string
  LastUpdateDate: Date

  constructor(input: ICreateNote) {
    this.Id = input.Id
    this.Title = input.Title
    this.State = input.State
    this.NotesListId = input.NotesListId
    this.Creator = input.Creator
    this.CreationDate = input.CreationDate
    this.Updater = input.Updater
    this.LastUpdateDate = input.LastUpdateDate
  }

  isSaved(): boolean {
    return this.Id !== null
  }

  setState(newState: number) {
    if (this.State === newState) return
    this.State = newState
  }
}
