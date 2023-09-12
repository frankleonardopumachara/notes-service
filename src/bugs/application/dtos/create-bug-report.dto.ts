import { IsString } from 'class-validator'

export class CreateBugReportDto {
  @IsString()
  summary: string

  @IsString()
  description: string

  @IsString()
  recreation: string
}
