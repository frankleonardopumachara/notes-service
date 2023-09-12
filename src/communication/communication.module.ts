import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { join } from 'path'
import { HttpModule } from '@nestjs/axios'
import { Constants, NOTES_MICROSERVICE } from './infrastructure/constants'
import { BugsReportService } from './infrastructure/clients/bugs-report.service'
import { NotesMicroservice } from './infrastructure/microservices/notes.microservice'
import { ConfigService } from '@nestjs/config'
import { IBugsReportService } from './infrastructure/interfaces/bugs-report.interface'

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
            // join(__dirname, NOTES_MICROSERVICE.NOTES_LISTS_SERVICE.PROTO_PATH),
            // join(__dirname, NOTES_MICROSERVICE.SETTINGS_SERVICE.PROTO_PATH),
          ],
        },
      },
    ]),
    HttpModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        baseURL: config.get('bugsServiceBaseUrl'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [NotesMicroservice, IBugsReportService],
  providers: [
    NotesMicroservice,
    {
      provide: IBugsReportService,
      useClass: BugsReportService,
    },
  ],
})
export class CommunicationModule {}
