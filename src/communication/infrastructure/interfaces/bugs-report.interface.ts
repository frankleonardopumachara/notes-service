import { BugReport, BugReportInstruction, CreateBugReport } from '../types'

export abstract class IBugsReportService {
  abstract createBugReport(body: CreateBugReport): Promise<BugReport>

  abstract getBugReportInstructions(): Promise<BugReportInstruction[]>
}
