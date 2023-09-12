export interface CreateBugReport {
  summary: string
  description: string
  recreation: string
}

export interface BugReport {
  id: string
  summary: string
  description: string
  recreation: string
  creator: string
  creationDate: string
  updater: string
  lastUpdateDate: string
}

export interface BugReportInstruction {
  id: string
  order: number
  title: string
  description: string
}

export interface Note {
  Id: string
  Title: string
  State: number
  NotesListId: string
  Creator: string
  Updater: string
}

export interface UpdateNote {
  Id: string
  Title: string
  State: number
}
