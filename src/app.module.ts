import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { NotesModule } from './notes/notes.module'
import { ConfigModule } from '@nestjs/config'
import { BugsModule } from './bugs/bugs.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    NotesModule,
    BugsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
