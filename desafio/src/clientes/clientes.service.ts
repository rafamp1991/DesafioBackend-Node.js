import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
import { Cidade } from 'src/cidades/cidade.entity';

@Injectable()
export class ClientesService {

    constructor(
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>,

        @InjectRepository(Cidade)
        private cidadeRepository: Repository<Cidade>,
    ) { }

    async findAll(): Promise<Cliente[]> {
        return await this.clienteRepository.find();
    }

    async findOne(cliente: Cliente): Promise<Cliente[]> {
        return await this.clienteRepository.find(cliente);
    }

    async findByCidadeNome(cidade: Cidade) : Promise<Cidade> {
        return await this.cidadeRepository.findOne(cidade);
    }

    async findByCidadeId(cidade: Cidade): Promise<Cliente[]> {
        return await this.clienteRepository.find({
            relations: ['cidade'],
            where: {
                cidade: {
                    id: cidade.id
                }
            }
        });
    }

    async create(cliente: Cliente): Promise<Cliente> {
        return await this.clienteRepository.save(cliente);
    }

    async update(cliente: Cliente): Promise<UpdateResult> {
        return await this.clienteRepository.update(cliente.id, cliente);
    }

    async delete(id): Promise<DeleteResult> {        
        return await this.clienteRepository.delete(id);
    }

    async validaCpf(cliente: Cliente) : Promise<any> {
        const clienteData = await this.clienteRepository.findOne({ cpf: cliente.cpf });
        if(clienteData){
            return true;
        }
        return false;
    }

    async validaId(cliente: Cliente) : Promise<any> {
        const clienteData = await this.clienteRepository.findOne({ id: cliente.id });
        if(clienteData){
            return true;
        }
        return false;
    }

    async validaCliente(cliente: Cliente) : Promise<Cliente> {
        return await this.clienteRepository.findOne(cliente);
    }
}
