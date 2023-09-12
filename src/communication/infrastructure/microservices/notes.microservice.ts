import { Inject, Injectable } from '@nestjs/common'
import { ClientGrpc } from '@nestjs/microservices'
import {
  NotesListsService,
  NotesService,
  SettingsService,
} from '../types/notes-microservice'
import { Constants, NOTES_MICROSERVICE } from '../constants'

@Injectable()
export class NotesMicroservice {
  constructor(@Inject(Constants.GrpcClient) private grpcClient: ClientGrpc) {}

  get notesService(): NotesService {
    return this.grpcClient.getService<NotesService>(
      NOTES_MICROSERVICE.NOTES_SERVICE.NAME,
    )
  }

  get noteListsService(): NotesListsService {
    return this.grpcClient.getService<NotesListsService>(
      NOTES_MICROSERVICE.NOTES_LISTS_SERVICE.NAME,
    )
  }

  get settingsService(): SettingsService {
    return this.grpcClient.getService<SettingsService>(
      NOTES_MICROSERVICE.SETTINGS_SERVICE.NAME,
    )
  }
}
