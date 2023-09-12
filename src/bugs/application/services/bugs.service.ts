import { Injectable } from '@nestjs/common'
import { CreateBugReportDto } from '../dtos/create-bug-report.dto'
import {
  BugReport,
  BugReportInstruction,
} from '../../../communication/infrastructure/types'
import { IBugsReportService } from '../../../communication/infrastructure/interfaces/bugs-report.interface'

@Injectable()
export class BugsService {
  constructor(private bugsReportService: IBugsReportService) {}

  createBugReport(dto: CreateBugReportDto): Promise<BugReport> {
    return this.bugsReportService.createBugReport(dto)
  }

  getBugReportInstructions(): Promise<BugReportInstruction[]> {
    return this.bugsReportService.getBugReportInstructions()
  }
}
