import { Test, TestingModule } from '@nestjs/testing'
import { BugsController } from './bugs.controller'
import { BugsService } from '../../application/services/bugs.service'

describe('BugsController', () => {
  let bugsController: BugsController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BugsController],
      providers: [
        {
          provide: BugsService,
          useValue: {
            createBugReport: () => {
              return {
                id: '8db93086-7d7f-486e-a44d-bc1408db7d74',
                summary: 'testing',
                description: 'description',
                recreation: 'recreation',
                creator: 'FPonce',
                creationDate: '1680400087',
                updater: 'FPonce',
                lastUpdateDate: '1680400087',
              }
            },
            getBugReportInstructions: () => {
              return [
                {
                  id: '1111',
                  order: 1,
                  title: 'Resumen',
                  description:
                    'Escribir una frase que resuma el contexto del bug.',
                },
                {
                  id: '2222',
                  order: 2,
                  title: 'Detalles',
                  description:
                    'Escribir un párrafo que detalle paso a paso la descripción de cómo experimentó el bug.',
                },
                {
                  id: '3333',
                  order: 3,
                  title: 'Recreación',
                  description:
                    'Si encontró un patrón de generación del bug, por favor redacte un paso a paso un ejemplo de cómo recrear el bug.',
                },
              ]
            },
          },
        },
      ],
    }).compile()

    bugsController = app.get<BugsController>(BugsController)
  })

  it('should be defined', () => {
    expect(bugsController).toBeDefined()
  })

  it('should create and return bug report', async () => {
    const bug = await bugsController.reportBug({
      summary: 'app closes',
      description: 'app closes when click on login button',
      recreation: 'clicks login button',
    })

    expect(bug).toBeDefined()
  })

  it('should return bug report instructions', async () => {
    const instructions = await bugsController.getBugReportInstructions()
    expect(instructions.length).toBeGreaterThan(0)
  })
})
