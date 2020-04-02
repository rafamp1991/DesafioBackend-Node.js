import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { ClientesController } from '../src/clientes/clientes.controller';
import { ClientesService } from '../src/clientes/clientes.service';
import { Cliente } from '../src/clientes/cliente.entity';
import { Cidade } from '../src/cidades/cidade.entity';

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
            update: jest.fn(() => true),
            delete: jest.fn(() => true),
            validaCpf: jest.fn(() => true),
          }),
        },
      ],
    }).compile();
    controller = testingModule.get(ClientesController);
    spyService = testingModule.get(ClientesService);
  });

  describe('findAll', () => {
    it('Deve listar todos os clientes', async () => {
      controller.index();
      expect(spyService.findAll()).toBeTruthy;
    });
  });

  describe('create', () => {
    it('Cadastra um novo cliente', async () => {
      let cli = new Cliente;
      
      cli.nome = 'Rafael';
      cli.sobrenome = 'Martins de Padua';
      cli.cpf = '000.000.000-17';
      cli.sexo = 'masculino';
      cli.dataNascimento = new Date(1991, 1, 6);
      cli.idade = 29;
      cli.cidade = new Cidade;
      cli.cidade.id = 4204202;
      controller.create(cli);

      //Testa se o objeto é avaliado como true ou false
      expect(spyService.create).toBeTruthy;

      //Verifica se objeto possui a propriedade id
      expect.objectContaining(cli.id);

      //Verifica a chamada das assertions
      expect.assertions(8)

      //Promisse matcher
      await expect(Promise.resolve('cli')).resolves.toBe('cli')
      
      //Assertions
      expect(cli.nome).toBe('Rafael');
      expect(cli.sobrenome).toBe('Martins de Padua');
      expect(cli.cpf).toBe('000.000.000-17');
      expect(cli.sexo).toBe('masculino');
      expect(cli.dataNascimento).toBe(cli.dataNascimento);
      expect(cli.idade).toBe(29);
      expect(cli.cidade.id).toBe(4204202);
    });
  });

  describe('update', () => {
    it('Atualiza um cliente', async () => {
      let cli = new Cliente;
      
      cli.nome = 'Rafael';
      cli.sobrenome = 'Martins de Padua';
      cli.cpf = '000.000.000-17';
      cli.sexo = 'masculino';
      cli.dataNascimento = new Date(1991, 1, 6);
      cli.idade = 29;
      cli.cidade = new Cidade;
      cli.cidade.id = 4204202;
      controller.create(cli);

      cli.nome = 'Rafa';
      cli.sobrenome = 'de Padua';
      cli.cpf = '000.000.000-13';
      cli.sexo = 'masculino';
      cli.dataNascimento = new Date(1991, 1, 6);
      cli.idade = 18;
      cli.cidade = new Cidade;
      cli.cidade.id = 4204202;
      controller.update(1,cli);

      //Verifica a chamada das assertions
      expect.assertions(7)
      
      //Assertions
      expect(cli.nome).toBe('Rafa');
      expect(cli.sobrenome).toBe('de Padua');
      expect(cli.cpf).toBe('000.000.000-13');
      expect(cli.sexo).toBe('masculino');
      expect(cli.dataNascimento).toBe(cli.dataNascimento);
      expect(cli.idade).toBe(18);
      expect(cli.cidade.id).toBe(4204202);
    });
  });

  describe('delete', () => {
    it('Remove um cliente', async () => {
      let cli = new Cliente;
      
      cli.id = 8;
      cli.nome = 'Rafael';
      cli.sobrenome = 'Martins de Padua';
      cli.cpf = '000.000.000-17';
      cli.sexo = 'masculino';
      cli.dataNascimento = new Date(1991, 1, 6);
      cli.idade = 29;
      cli.cidade = new Cidade;
      cli.cidade.id = 4204202;
      controller.create(cli);
      
      
      controller.delete(8);

      //Verifica a chamada das assertions
      expect.assertions(1)

      //Promisse matcher
      expect(cli).toBe(null);
      
    });
  });

});
