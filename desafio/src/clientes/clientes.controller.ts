import { Controller, Get, HttpException } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClientesService } from './clientes.service';
import { Post, Put, Delete, Body, Param } from  '@nestjs/common';
import { Cidade } from '../cidades/cidade.entity';

@Controller('clientes')
export class ClientesController {
    constructor(private clientesService: ClientesService){}

    @Get()
    index(): Promise<Cliente[]> {
        return this.clientesService.findAll();
    } 

    @Get('id/:id')
    async findById(@Param('id') id, @Body() clienteData: Cliente): Promise<Cliente[]> {
        clienteData.id = Number(id);

        let cliente = new Cliente();
        cliente = await this.clientesService.validaCliente(clienteData);

        if (!cliente) {
            throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.clientesService.findOne(clienteData);
    }

    @Get('nome/:nome')
    async findByNome(@Param('nome') nome, @Body() clienteData: Cliente): Promise<Cliente[]> {
        clienteData.nome = String(nome);

        let cliente = new Cliente();
        cliente = await this.clientesService.validaCliente(clienteData);

        if (!cliente) {
            throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.clientesService.findOne(clienteData);
    }

    @Get('cidade/:nome')
    async findByCidadeNome(@Param('nome') nome, @Body() cidade: Cidade): Promise<Cliente[]> {
        cidade.nome = String(nome);

        let cidadeData = new Cidade();
        cidadeData =  await this.clientesService.findByCidadeNome(cidade);
        
        if (!cidadeData) {
            throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.clientesService.findByCidadeId(cidadeData);
    }

    @Post('create')
    async create(@Body() clienteData: Cliente): Promise<any> {
        let cliente = new Cliente();
        cliente = await this.clientesService.validaCpf(clienteData);
        
        if (cliente) {
            throw new HttpException('O cliente já existe.', 409);
        }
        return this.clientesService.create(clienteData);
    }  

    @Put('update/:id')
    async update(@Param('id') id, @Body() clienteData: Cliente): Promise<any> {
        clienteData.id = Number(id);
        let cliente = false;
        cliente = await this.clientesService.validaId(clienteData);

        if (cliente == false) {
            throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.clientesService.update(clienteData);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {   
        return await this.clientesService.delete(id);
    }  
}
