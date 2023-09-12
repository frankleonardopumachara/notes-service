import { Module } from '@nestjs/common'
import { NotesController } from './infrastructure/controllers/notes.controller'

@Module({
  controllers: [NotesController],
  imports: [],
  exports: [],
  providers: [],
})
export class NotesModule {}
