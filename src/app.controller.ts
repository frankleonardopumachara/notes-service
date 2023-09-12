import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('App health')
@Controller()
export class AppController {
  @Get()
  getHealth(): string {
    return 'App working!!'
  }
}
