import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { NotesModule } from './notes/notes.module'

@Module({
  imports: [NotesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
