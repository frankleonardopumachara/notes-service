import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { NotesService } from '../../application/services/notes.service'
import { CreateNoteDto } from '../../application/dtos/create-note.dto'
import { UpdateNoteDto } from '../../application/dtos/update-note.dto'
import { SimplifiedNote } from '../../../communication/application/types/notes-microservice'

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getNotes(): Promise<SimplifiedNote[]> {
    return this.notesService.getNotes()
  }

  @Post()
  createNote(@Body() dto: CreateNoteDto) {
    return this.notesService.createNote(dto)
  }

  @Get(':noteId')
  getNoteById(@Param('noteId') noteId: string) {
    return this.notesService.getNoteByIdOrFail(noteId)
  }

  @Put(':noteId')
  updateNote(@Param('noteId') noteId: string, @Body() dto: UpdateNoteDto) {
    return this.notesService.updateNote(noteId, dto)
  }

  @Delete(':noteId')
  deleteNote(@Param('noteId') noteId: string) {
    return this.notesService.deleteNote(noteId)
  }
}
