import { Test } from '@nestjs/testing';
import { ClientesService } from './clientes.service';
import { CidadesService } from '../cidades/cidades.service';
import { ClientesModule } from './clientes.module';
import { Cliente } from './cliente.entity';

describe('ClientesService', () => {
  let clientesService: ClientesService;
  let cidadesService: CidadesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ClientesModule],
      providers: [ClientesService, CidadesService]
    }).compile();

    clientesService = moduleRef.get<ClientesService>(ClientesService);
    cidadesService = moduleRef.get<CidadesService>(CidadesService);
  });

  it('findAll()', async () => {
    const cliente = new Cliente;
    expect(await clientesService.findAll()).toBe(cliente);
  });

});
