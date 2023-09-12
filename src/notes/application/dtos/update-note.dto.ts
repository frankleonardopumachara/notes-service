import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateNoteDto {
  @ApiProperty()
  @IsString()
  state: number

  @ApiProperty()
  @IsString()
  title: string
}
