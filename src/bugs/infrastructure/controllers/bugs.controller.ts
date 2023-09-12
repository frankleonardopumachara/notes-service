import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateBugReportDto } from '../../application/dtos/create-bug-report.dto'
import { BugsService } from '../../application/services/bugs.service'

@Controller('bugs')
export class BugsController {
  constructor(private bugsService: BugsService) {}

  @Get()
  getBugReportInstructions() {
    return this.bugsService.getBugReportInstructions()
  }

  @Post()
  reportBug(@Body() dto: CreateBugReportDto) {
    return this.bugsService.createBugReport(dto)
  }
}
