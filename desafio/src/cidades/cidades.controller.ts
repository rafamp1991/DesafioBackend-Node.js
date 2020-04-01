import { Controller, Get, HttpException } from '@nestjs/common';
import { Cidade } from './cidade.entity';
import { CidadesService } from './cidades.service';
import { Post, Put, Delete, Body, Param } from  '@nestjs/common';
import { Estado } from 'src/estados/estado.entity';

@Controller('cidades')
export class CidadesController {
    constructor(private cidadesService: CidadesService){}

    @Get()
    index(): Promise<Cidade[]> {
        return this.cidadesService.findAll();
    }
    
    @Get('id/:id')
    async findById(@Param('id') id, @Body() cidadeData: Cidade): Promise<Cidade[]> {
        cidadeData.id = Number(id);
        let cidade = new Cidade();
        cidade = await this.cidadesService.validaCidade(cidadeData);

        if (!cidade) {
            throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.cidadesService.findOne(cidadeData);
    }

    @Get('nome/:nome')
    async findByNome(@Param('nome') nome, @Body() cidadeData: Cidade): Promise<Cidade[]> {
        cidadeData.nome = String(nome);
        let cidade = new Cidade();
        cidade = await this.cidadesService.validaCidade(cidadeData);

        if (!cidade) {
            throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.cidadesService.findOne(cidadeData);
    }

    @Get('estado/nome/:nome')
    async findByEstadoNome(@Param('nome') nome, @Body() estado: Estado): Promise<Cidade[]> {
        estado.nome = String(nome);
        let estadoData = new Estado();        
        estadoData =  await this.cidadesService.findByEstado(estado);

        if (!estadoData) {
            throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.cidadesService.findByEstadoId(estadoData);
    }

    @Get('estado/uf/:uf')
    async findByEstadoUf(@Param('uf') uf, @Body() estado: Estado): Promise<Cidade[]> {
        estado.uf = String(uf);
        let estadoData = new Estado();        
        estadoData =  await this.cidadesService.findByEstado(estado);

        if (!estadoData) {
            throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.cidadesService.findByEstadoId(estadoData);
    }

    @Post('create')
    async create(@Body() cidadeData: Cidade): Promise<any> {
        let cidade = new Cidade();
        cidade = await this.cidadesService.validaCidade(cidadeData);

        if (cidade) {
            throw new HttpException('A cidade já existe.', 409);
        }
        return this.cidadesService.create(cidadeData);
    }  

    @Put('update/:id')
    async update(@Param('id') id, @Body() cidadeData: Cidade): Promise<any> {
        cidadeData.id = Number(id);
        let cidade = false;
        cidade = await this.cidadesService.validaId(cidadeData);

        if (cidade == false) {
            throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.cidadesService.update(cidadeData);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.cidadesService.delete(id);
    }
}
