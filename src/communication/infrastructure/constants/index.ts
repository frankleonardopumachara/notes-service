export enum Constants {
  GrpcClient = 'GrpcClient',
}

export const NOTES_MICROSERVICE = {
  PACKAGE: 'NotesMicroservice',
  NOTES_SERVICE: {
    NAME: 'NotesService',
    PROTO_PATH: 'infrastructure/protos/notes.proto',
  },
  NOTES_LISTS_SERVICE: {
    NAME: 'NoteListsService',
    PROTO_PATH: 'infrastructure/protos/note-lists.proto',
  },
  SETTINGS_SERVICE: {
    NAME: 'SettingsService',
    PROTO_PATH: 'infrastructure/protos/settings.proto',
  },
}
