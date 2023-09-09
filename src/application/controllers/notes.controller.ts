import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateNoteDto } from '../dtos/create-note.dto'
import { UpdateNoteDto } from '../dtos/update-note.dto'
import { NotesService } from '../../domain/services/notes.service'

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getNotes() {}

  @Post()
  createNote(@Body() dto: CreateNoteDto) {
    return this.notesService.createNote(dto)
  }

  @Get(':noteId')
  getNoteById(@Param('noteId') noteId: string) {}

  @Put(':noteId')
  updateNote(@Param('noteId') noteId: string, @Body() dto: UpdateNoteDto) {}

  @Delete(':noteId')
  deleteNote(@Param('noteId') noteId: string) {}
}
