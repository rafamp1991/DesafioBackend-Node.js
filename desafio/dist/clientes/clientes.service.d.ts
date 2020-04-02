import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Cidade } from '../cidades/cidade.entity';
export declare class ClientesService {
    private clienteRepository;
    private cidadeRepository;
    constructor(clienteRepository: Repository<Cliente>, cidadeRepository: Repository<Cidade>);
    findAll(): Promise<Cliente[]>;
    findOne(cliente: Cliente): Promise<Cliente[]>;
    findByCidadeNome(cidade: Cidade): Promise<Cidade>;
    findByCidadeId(cidade: Cidade): Promise<Cliente[]>;
    create(cliente: Cliente): Promise<Cliente>;
    update(cliente: Cliente): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
    validaCpf(cliente: Cliente): Promise<any>;
    validaId(cliente: Cliente): Promise<any>;
    validaCliente(cliente: Cliente): Promise<Cliente>;
}
