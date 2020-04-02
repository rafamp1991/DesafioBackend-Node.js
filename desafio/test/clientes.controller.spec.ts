import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { ClientesController } from '../src/clientes/clientes.controller';
import { ClientesService } from '../src/clientes/clientes.service';

describe('Clientes Controller', () => {
  let testingModule: TestingModule;
  let controller: ClientesController;
  let spyService: ClientesService;

  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      controllers: [ClientesController],
      providers: [
        {
          provide: ClientesService,
          useFactory: () => ({
            findAll: jest.fn(() => true),
            create: jest.fn(() => true),
          }),
        },
      ],
    }).compile();
    controller = testingModule.get(ClientesController);
    spyService = testingModule.get(ClientesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  describe('findAll', () => {
    it('Deve listar todos os clientes', async () => {
      controller.index();
      expect(spyService.findAll()).toBeTruthy;
    });
  });

});
