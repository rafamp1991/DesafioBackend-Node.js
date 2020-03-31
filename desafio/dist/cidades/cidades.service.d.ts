import { Repository } from 'typeorm';
import { Cidade } from './cidade.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Estado } from 'src/estados/estado.entity';
export declare class CidadesService {
    private cidadeRepository;
    private estadoRepository;
    constructor(cidadeRepository: Repository<Cidade>, estadoRepository: Repository<Estado>);
    findAll(): Promise<Cidade[]>;
    findOne(cidade: Cidade): Promise<Cidade[]>;
    findByEstado(estado: Estado): Promise<Estado>;
    findByEstadoId(estado: Estado): Promise<Cidade[]>;
    create(cidade: Cidade): Promise<Cidade>;
    update(cidade: Cidade): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
