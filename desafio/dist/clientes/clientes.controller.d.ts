import { Cliente } from './cliente.entity';
import { ClientesService } from './clientes.service';
import { Cidade } from '../cidades/cidade.entity';
export declare class ClientesController {
    private clientesService;
    constructor(clientesService: ClientesService);
    index(): Promise<Cliente[]>;
    findById(id: any, clienteData: Cliente): Promise<Cliente[]>;
    findByNome(nome: any, clienteData: Cliente): Promise<Cliente[]>;
    findByCidadeNome(nome: any, cidade: Cidade): Promise<Cliente[]>;
    create(clienteData: Cliente): Promise<any>;
    update(id: any, clienteData: Cliente): Promise<any>;
    delete(id: any): Promise<any>;
}
