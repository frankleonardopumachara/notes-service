import { Controller, Delete, Get, Post, Put } from '@nestjs/common'

@Controller('notes')
export class NotesController {
  @Get()
  getNotes() {}

  @Post()
  createNote() {}

  @Get(':noteId')
  getNoteById() {}

  @Put(':noteId')
  updateNote() {}

  @Delete(':noteId')
  deleteNote() {}
}
