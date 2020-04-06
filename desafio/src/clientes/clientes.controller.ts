import { Controller, Get, Res } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClientesService } from './clientes.service';
import { Post, Put, Delete, Body, Param } from  '@nestjs/common';
import { Cidade } from '../cidades/cidade.entity';

@Controller('clientes')
export class ClientesController {
    constructor(private clientesService: ClientesService){}

    @Get()
    async index(@Res() res): Promise<Cliente[]> {
        if (!(await this.clientesService.findAll())) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.clientesService.findAll());
    } 

    @Get('id/:id')
    async findById(@Res() res, @Param('id') id, @Body() clienteData: Cliente): Promise<Cliente[]> {
        clienteData.id = Number(id);
        let cliente = new Cliente();

        if (!(cliente = await this.clientesService.validaCliente(clienteData))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        } 
        return res.status(200).send(await this.clientesService.findOne(clienteData));
    }

    @Get('nome/:nome')
    async findByNome(@Res() res, @Param('nome') nome, @Body() clienteData: Cliente): Promise<Cliente[]> {
        clienteData.nome = String(nome);
        let cliente = new Cliente();

        if (!(cliente = await this.clientesService.validaCliente(clienteData))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        } 
        return res.status(200).send(await this.clientesService.findOne(clienteData));
    }

    @Get('cidade/:nome')
    async findByCidadeNome(@Res() res, @Param('nome') nome, @Body() cidade: Cidade): Promise<Cliente[]> {
        cidade.nome = String(nome);
        let cidadeData = new Cidade();

        if (!(cidadeData = await this.clientesService.findByCidadeNome(cidade))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        } 
        return res.status(200).send(await this.clientesService.findByCidadeId(cidadeData));
    }

    @Post('create')
    async create(@Res() res, @Body() clienteData: Cliente): Promise<any> {
        let cliente:boolean = false;

        if (cliente = await this.clientesService.validaCpf(clienteData)) {
            return res.status(409).send("status: 409 Conflict\nmensagem: O cliente já existe!");
        }
        return res.status(201).send(await this.clientesService.create(clienteData));
    }  

    @Put('update/:id')
    async update(@Res() res, @Param('id') id, @Body() clienteData: Cliente): Promise<any> {
        clienteData.id = Number(id);
        let cliente:boolean = false;

        if (!(cliente = await this.clientesService.validaId(clienteData))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.clientesService.update(clienteData));
    }

    @Delete('delete/:id')
    async delete(@Res() res, @Param('id') id): Promise<any> { 
        let cliente = new Cliente();
        cliente.id = Number(id);

        if (!(await this.clientesService.validaId(cliente))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        await this.clientesService.delete(id);
        return res.status(200).send("status: 200 OK\nmensagem: cliente removido com sucesso!");
    }  
}
