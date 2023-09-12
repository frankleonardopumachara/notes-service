import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import {
  BugReportInstruction,
  BugReport,
  CreateBugReport,
} from '../types'

@Injectable()
export class BugsReportService {
  constructor(private http: HttpService) {}

  createBugReport(body: CreateBugReport): Promise<BugReport> {
    return this.http.axiosRef.post(`bug-reports`, body)
  }

  getBugReportInstructions(): Promise<BugReportInstruction[]> {
    return this.http.axiosRef.get(`bug-report-submission-instructions`)
  }
}
