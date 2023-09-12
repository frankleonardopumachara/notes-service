import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateNoteDto {
  @ApiProperty()
  @IsString()
  Title: string
}
