import { Module } from '@nestjs/common'
import { NotesController } from './infrastructure/controllers/notes.controller'
import { CommunicationModule } from '../communication/communication.module'
import { NotesManagementService } from './application/services/notes-management.service'

@Module({
  controllers: [NotesController],
  imports: [CommunicationModule],
  exports: [],
  providers: [NotesManagementService],
})
export class NotesModule {}
