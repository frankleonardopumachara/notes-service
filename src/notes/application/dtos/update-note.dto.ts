import { IsString } from 'class-validator'

export class UpdateNoteDto {
  @IsString()
  state: number

  @IsString()
  title: string
}
