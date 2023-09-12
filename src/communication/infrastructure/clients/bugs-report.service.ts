import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { BugReport, BugReportInstruction, CreateBugReport } from '../types'
import { IBugsReportService } from '../interfaces/bugs-report.interface'

@Injectable()
export class BugsReportService implements IBugsReportService {
  constructor(private http: HttpService) {}

  async createBugReport(body: CreateBugReport): Promise<BugReport> {
    const response = await this.http.axiosRef.post(`bug-reports`, body)
    return response.data
  }

  async getBugReportInstructions(): Promise<BugReportInstruction[]> {
    const response = await this.http.axiosRef.get(
      `bug-report-submission-instructions`,
    )
    return response.data
  }
}
