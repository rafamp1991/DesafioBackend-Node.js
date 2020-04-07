import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { ClientesService } from '../src/clientes/clientes.service';
import { CidadesService } from '../src/cidades/cidades.service';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from '../src/clientes/cliente.entity';
import { Cidade } from '../src/cidades/cidade.entity';
import { Estado } from '../src/estados/estado.entity';

const cliente = {
  id: 1,
  nome: 'Rafael',
  sobrenome: 'Martins de Padua',
  cpf: '000.000.000-17',
  sexo: 'masculino',
  dataNascimento: new Date(1991, 1, 6),
  idade: 29,
  cidade: {
    id: 4204202
  }
}

describe('ClientesService', () => {
  let clientesService: ClientesService;
  let cidadesService: CidadesService;
  let spyRepository: any;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          database: 'desafio',
          username: 'postgres',
          password: 'admin',
          entities: [__dirname + '/../**/*.entity.ts'],
          synchronize: false,
        }),
        TypeOrmModule.forFeature([Cliente, Cidade, Estado])],
      providers: [
        ClientesService,
        {
          provide: Cliente,
          useValue: Repository,
          useFactory: () => ({
            findAll: jest.fn(() => true),
            find: jest.fn(() => true),
            findOne: jest.fn(() => true),
          }),
        },
        CidadesService, 
      ],
    }).compile();

    clientesService = module.get(ClientesService);
    cidadesService = module.get(CidadesService);
    spyRepository = module.get(Cliente);
  });

  it('should be defined', () => {
    expect(clientesService).toBeDefined();
  });

  describe('findAll', () => {
    it('deve chamar a função findAll de clientesService', async () => {
      
      const cli = new Cliente;
      
      cli.id = 1;
      cli.nome = 'Rafael';
      cli.sobrenome = 'Martins de Padua';
      cli.cpf = '000.000.000-17';
      cli.sexo = 'masculino';
      cli.dataNascimento = new Date(1991, 1, 6);
      cli.idade = 29;
      cli.cidade = new Cidade;
      cli.cidade.id = 4204202;

      spyRepository.save = jest.fn();
      let teste = await spyRepository.save(cli);
      console.log("TESTE: ",teste);
      /* expect(spyRepository.find).toHaveBeenCalledWith(
        Object.assign(new Cliente(), cliente),
      ); */
    });
  });
});
