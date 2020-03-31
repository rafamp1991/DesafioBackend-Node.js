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

    /* @Get('estado/:nome')
    findByEstadoNome(@Param('nome') nome, @Body() cidadeData: Cidades): Promise<Cidades[]> {
        cidadeData.nome = String(nome);
        return this.cidadesService.find(cidadeData);
    } */

    @Post('create')
    async create(@Body() cidadeData: Cidade): Promise<any> {
      return this.cidadesService.create(cidadeData);
    }  

    @Put(':id/update')
    async update(@Param('id') id, @Body() cidadeData: Cidade): Promise<any> {
        cidadeData.id = Number(id);
        console.log('Update #' + cidadeData.id)
        return this.cidadesService.update(cidadeData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.cidadesService.delete(id);
    }
}
