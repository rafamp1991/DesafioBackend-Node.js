import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Estado } from './estado.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class EstadosService {
    
    constructor(
        @InjectRepository(Estado)
        private estadoRepository: Repository<Estado>,
    ) { }

    async  findAll(): Promise<Estado[]> {
        return await this.estadoRepository.find();
    }

    async  findOne(estado: Estado): Promise<Estado[]> {
        return await this.estadoRepository.find(estado);
    }

    async  create(estado: Estado): Promise<Estado> {
        return await this.estadoRepository.save(estado);
    }

    async update(estado: Estado): Promise<UpdateResult> {
        return await this.estadoRepository.update(estado.id, estado);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.estadoRepository.delete(id);
    }

    async validaId(estado: Estado) : Promise<any> {
        const estadoData = await this.estadoRepository.findOne({ id: estado.id });
        if(estadoData){
            return true;
        }
        return false;
    }

    async validaEstado(estado: Estado) : Promise<Estado> {
        return await this.estadoRepository.findOne(estado);
    }
}
