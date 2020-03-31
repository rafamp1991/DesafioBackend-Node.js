import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cidade } from './cidade.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class CidadesService {

    constructor(
        @InjectRepository(Cidade)
        private cidadeRepository: Repository<Cidade>,
    ) { }

    async findAll(): Promise<Cidade[]> {
        return await this.cidadeRepository.find();
    }

    async findOne(cidade: Cidade): Promise<Cidade[]> {
        return await this.cidadeRepository.find(cidade);
    }

    /* async find(cidade: Cidades): Promise<any> {
        return await this.cidadeRepository.findOne(cidade, { relations: ["estados.nome"] });
    } */

    async create(cidade: Cidade): Promise<Cidade> {
        return await this.cidadeRepository.save(cidade);
    }

    async update(cidade: Cidade): Promise<UpdateResult> {
        return await this.cidadeRepository.update(cidade.id, cidade);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.cidadeRepository.delete(id);
    }
}
