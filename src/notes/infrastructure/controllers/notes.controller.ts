import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common'
import { NotesService } from '../../application/services/notes.service'
import { CreateNoteDto } from '../../application/dtos/create-note.dto'
import { UpdateNoteDto } from '../../application/dtos/update-note.dto'
import { NoteNotFound } from '../../domain/errors/note-not-found'

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getNotes() {
    return this.notesService.getNotes()
  }

  @Post()
  async createNote(@Body() dto: CreateNoteDto) {
    const result = await this.notesService.createNote(dto)

    if (result.isFailure()) throw result.error

    return result.value
  }

  @Get(':noteId')
  async getNoteById(@Param('noteId') noteId: string) {
    const result = await this.notesService.getNoteByIdOrFail(noteId)

    if (result.isSuccess()) {
      return result.value
    }

    if (result.error instanceof NoteNotFound) {
      throw new NotFoundException()
    }

    throw result.error
  }

  @Put(':noteId')
  async updateNote(
    @Param('noteId') noteId: string,
    @Body() dto: UpdateNoteDto,
  ) {
    const result = await this.notesService.updateNote(noteId, dto)

    if (result.isFailure()) throw result.error

    return result.value
  }

  @Delete(':noteId')
  async deleteNote(@Param('noteId') noteId: string) {
    const result = await this.notesService.deleteNote(noteId)

    if (result.isSuccess()) {
      return result.value
    }

    if (result.error instanceof NoteNotFound) {
      throw new NotFoundException()
    }

    throw result.error
  }
}
