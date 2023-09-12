import { Module } from '@nestjs/common'
import { BugsController } from './infrastructure/controllers/bugs.controller'
import { BugsService } from './application/services/bugs.service'
import { CommunicationModule } from '../communication/communication.module'

@Module({
  imports: [CommunicationModule],
  controllers: [BugsController],
  providers: [BugsService],
})
export class BugsModule {}
