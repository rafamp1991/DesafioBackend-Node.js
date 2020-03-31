import { Controller, Get } from '@nestjs/common';
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
    findById(@Param('id') id, @Body() cidadeData: Cidade): Promise<Cidade[]> {
        cidadeData.id = Number(id);
        return this.cidadesService.findOne(cidadeData);
    }

    @Get('nome/:nome')
    findByNome(@Param('nome') nome, @Body() cidadeData: Cidade): Promise<Cidade[]> {
        cidadeData.nome = String(nome);
        return this.cidadesService.findOne(cidadeData);
    }

    @Get('estado/nome/:nome')
    async findByEstadoNome(@Param('nome') nome, @Body() estado: Estado): Promise<Cidade[]> {
        estado.nome = String(nome);
        let estadoData = new Estado();        
        estadoData =  await this.cidadesService.findByEstado(estado);
        return this.cidadesService.findByEstadoId(estadoData);
    }

    @Get('estado/uf/:uf')
    async findByEstadoUf(@Param('uf') uf, @Body() estado: Estado): Promise<Cidade[]> {
        estado.uf = String(uf);
        let estadoData = new Estado();        
        estadoData =  await this.cidadesService.findByEstado(estado);
        return this.cidadesService.findByEstadoId(estadoData);
    }

    @Post('create')
    async create(@Body() cidadeData: Cidade): Promise<any> {
      return this.cidadesService.create(cidadeData);
    }  

    @Put('update/:id')
    async update(@Param('id') id, @Body() cidadeData: Cidade): Promise<any> {
        cidadeData.id = Number(id);
        console.log('Update #' + cidadeData.id)
        return this.cidadesService.update(cidadeData);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.cidadesService.delete(id);
    }
}
