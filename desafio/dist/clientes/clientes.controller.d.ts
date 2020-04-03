import { Cliente } from './cliente.entity';
import { ClientesService } from './clientes.service';
import { Cidade } from '../cidades/cidade.entity';
export declare class ClientesController {
    private clientesService;
    constructor(clientesService: ClientesService);
    index(res: any): Promise<Cliente[]>;
    findById(res: any, id: any, clienteData: Cliente): Promise<Cliente[]>;
    findByNome(res: any, nome: any, clienteData: Cliente): Promise<Cliente[]>;
    findByCidadeNome(res: any, nome: any, cidade: Cidade): Promise<Cliente[]>;
    create(res: any, clienteData: Cliente): Promise<any>;
    update(res: any, id: any, clienteData: Cliente): Promise<any>;
    delete(res: any, id: any): Promise<any>;
}
