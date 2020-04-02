import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cidade } from './cidade.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
import { Estado } from '../estados/estado.entity';

@Injectable()
export class CidadesService {

    constructor(
        @InjectRepository(Cidade)
        private cidadeRepository: Repository<Cidade>,

        @InjectRepository(Estado)
        private estadoRepository: Repository<Estado>,
    ) { }

    async findAll(): Promise<Cidade[]> {
        return await this.cidadeRepository.find();
    }

    async findOne(cidade: Cidade): Promise<Cidade[]> {
        return await this.cidadeRepository.find(cidade);
    }

    async findByEstado(estado: Estado) : Promise<Estado> {
        return await this.estadoRepository.findOne(estado);
    }

    async findByEstadoId(estado: Estado): Promise<Cidade[]> {
        return await this.cidadeRepository.find({
            relations: ['estado'],
            where: {
                estado: {
                    id: estado.id
                }
            }
        });
    }

    async create(cidade: Cidade): Promise<Cidade> {
        return await this.cidadeRepository.save(cidade);
    }

    async update(cidade: Cidade): Promise<UpdateResult> {
        return await this.cidadeRepository.update(cidade.id, cidade);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.cidadeRepository.delete(id);
    }

    async validaId(cidade: Cidade) : Promise<any> {
        const cidadeData = await this.cidadeRepository.findOne({ id: cidade.id });
        if(cidadeData){
            return true;
        }
        return false;
    }

    async validaCidade(cidade: Cidade) : Promise<Cidade> {
        return await this.cidadeRepository.findOne(cidade);
    }
}
