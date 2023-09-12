import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { join } from 'path'
import { HttpModule } from '@nestjs/axios'
import { Constants, NOTES_MICROSERVICE } from './infrastructure/constants'
import { BugsReportService } from './infrastructure/clients/bugs-report.service'
import { NotesMicroservice } from './infrastructure/microservices/notes.microservice'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: Constants.GrpcClient,
        transport: Transport.GRPC,
        options: {
          package: NOTES_MICROSERVICE.PACKAGE,
          protoPath: [
            join(__dirname, NOTES_MICROSERVICE.NOTES_SERVICE.PROTO_PATH),
            join(__dirname, NOTES_MICROSERVICE.NOTES_LISTS_SERVICE.PROTO_PATH),
            join(__dirname, NOTES_MICROSERVICE.SETTINGS_SERVICE.PROTO_PATH),
          ],
        },
      },
    ]),
    HttpModule.register({
      url: 'http://localhost:8080',
    }),
  ],
  exports: [NotesMicroservice],
  providers: [BugsReportService],
})
export class CommunicationModule {}
