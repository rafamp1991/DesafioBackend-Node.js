import { Controller, Get } from '@nestjs/common';
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

    /* @Get('cidade/:id')
    findByCidadeId(@Param('id') id, @Body() cidadeData: Cidades): Promise<Clientes[]> {
        cidadeData.id = Number(id);
        console.log('Cidade Controller: ' + cidadeData.id)
      return this.clientesService.findByCidade(cidadeData);
    } */

    @Get('cidade/:nome')
    async findByCidadeNome(@Param('nome') nome, @Body() cidade: Cidade): Promise<Cliente[]> {
        cidade.nome = String(nome);
        console.log('Cidade Controller: ' + cidade.nome)

        let cidadeData = new Cidade();

        //Primeiro verifico se existe a cidade pelo nome informado
         cidadeData =  await this.clientesService.findByCidadeNome(cidade);
        
        //Depois chamo o método para listar os clientes dessa cidade
        return this.clientesService.findByCidadeId(cidadeData);
    }

    @Post('create')
    async create(@Body() clienteData: Cliente): Promise<any> {
        return this.clientesService.create(clienteData);
    }  

    @Put(':id/update')
    async update(@Param('id') id, @Body() clienteData: Cliente): Promise<any> {
        clienteData.id = Number(id);
        console.log('Update #' + clienteData.id)
        return this.clientesService.update(clienteData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.clientesService.delete(id);
    }  
}
