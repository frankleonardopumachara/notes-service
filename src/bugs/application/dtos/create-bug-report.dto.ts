import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateBugReportDto {
  @ApiProperty()
  @IsString()
  summary: string

  @ApiProperty()
  @IsString()
  description: string

  @ApiProperty()
  @IsString()
  recreation: string
}
