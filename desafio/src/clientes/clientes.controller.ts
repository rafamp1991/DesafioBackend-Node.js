import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClientesService } from './clientes.service';
import { Post, Put, Delete, Body, Param } from  '@nestjs/common';
import { Cidade } from 'src/cidades/cidade.entity';

@Controller('clientes')
export class ClientesController {
    constructor(private clientesService: ClientesService){}

    @Get()
    index(): Promise<Cliente[]> {
        return this.clientesService.findAll();
    } 

    @Get('id/:id')
    findById(@Param('id') id, @Body() clienteData: Cliente): Promise<Cliente[]> {
        clienteData.id = Number(id);
        return this.clientesService.findOne(clienteData);
    }

    @Get('nome/:nome')
    findByNome(@Param('nome') nome, @Body() clienteData: Cliente): Promise<Cliente[]> {
        clienteData.nome = String(nome);
        return this.clientesService.findOne(clienteData);
    }

    @Get('cidade/:nome')
    async findByCidadeNome(@Param('nome') nome, @Body() cidade: Cidade): Promise<Cliente[]> {
        cidade.nome = String(nome);
        let cidadeData = new Cidade();
        cidadeData =  await this.clientesService.findByCidadeNome(cidade);
        return this.clientesService.findByCidadeId(cidadeData);
    }

    @Post('create')
    async create(@Body() clienteData: Cliente): Promise<any> {
        try {
            return this.clientesService.create(clienteData);
        } catch (error) {
            throw new HttpException(
                {
                message: 'erro ao cadastrar o cliente',
                success: false,
                error,
                data: null,
                },
                HttpStatus.BAD_REQUEST,
                );
        }
    }  

    @Put('update/:id')
    async update(@Param('id') id, @Body() clienteData: Cliente): Promise<any> {
        clienteData.id = Number(id);
        console.log('Update #' + clienteData.id)
        return this.clientesService.update(clienteData);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
        return this.clientesService.delete(id);
    }  
}
