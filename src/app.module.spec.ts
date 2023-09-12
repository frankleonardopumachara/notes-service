import { Test } from '@nestjs/testing'
import { ConfigModule } from '@nestjs/config'
import { NotesModule } from './notes/notes.module'
import { BugsModule } from './bugs/bugs.module'
import { AppModule } from './app.module'

describe('AppModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [ConfigModule, NotesModule, BugsModule],
    })

    expect(module).toBeDefined()
  })

  it('should create a new module', () => {
    const module = new AppModule()
    expect(module).toBeDefined()
  })
})
