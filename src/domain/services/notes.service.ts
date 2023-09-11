import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import { ClientGrpc } from '@nestjs/microservices'
import { CreateNoteDto } from '../../application/dtos/create-note.dto'

@Injectable()
export class NotesService implements OnModuleInit {
  private service: any

  constructor(@Inject('GRPC_CLIENT') private grpcClient: ClientGrpc) {}

  onModuleInit() {
    this.service = this.grpcClient.getService('NotesService')
  }

  getNotes() {}

  createNote(dto: CreateNoteDto) {
    return this.service.Save(dto)
  }

  getNoteById() {}

  updateNote() {}

  deleteNote() {}
}
