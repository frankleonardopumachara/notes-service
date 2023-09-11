import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { join } from 'path'
import { NotesController } from './application/controllers/notes.controller'
import { NotesService } from './domain/services/notes.service'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GRPC_CLIENT',
        transport: Transport.GRPC,
        options: {
          package: 'NotesMicroservice',
          protoPath: join(__dirname, 'protos/notes.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService],
})
export class AppModule {}
