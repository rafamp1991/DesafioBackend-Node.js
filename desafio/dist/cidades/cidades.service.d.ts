import { Repository } from 'typeorm';
import { Cidade } from './cidade.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class CidadesService {
    private cidadeRepository;
    constructor(cidadeRepository: Repository<Cidade>);
    findAll(): Promise<Cidade[]>;
    findOne(cidade: Cidade): Promise<Cidade[]>;
    create(cidade: Cidade): Promise<Cidade>;
    update(cidade: Cidade): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
