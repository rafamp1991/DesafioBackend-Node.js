import { Repository } from 'typeorm';
import { Estado } from './estado.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class EstadosService {
    private estadoRepository;
    constructor(estadoRepository: Repository<Estado>);
    findAll(): Promise<Estado[]>;
    findOne(estado: Estado): Promise<Estado[]>;
    create(estado: Estado): Promise<Estado>;
    update(estado: Estado): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
    validaId(estado: Estado): Promise<any>;
    validaEstado(estado: Estado): Promise<Estado>;
}
