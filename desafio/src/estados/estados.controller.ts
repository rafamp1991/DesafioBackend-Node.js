import { Controller, Get } from '@nestjs/common';
import { Estado } from './estado.entity';
import { EstadosService } from './estados.service';
import { Post, Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('estados')
export class EstadosController {
    constructor(private estadosService: EstadosService){}

    @Get()
    index(): Promise<Estado[]> {
      return this.estadosService.findAll();
    } 

    @Get('id/:id')
    findById(@Param('id') id, @Body() estadoData: Estado): Promise<Estado[]> {
      estadoData.id = Number(id);
        return this.estadosService.findOne(estadoData);
    }

    @Get('uf/:uf')
    findByUf(@Param('uf') uf, @Body() estadoData: Estado): Promise<Estado[]> {
      estadoData.uf = String(uf);
      return this.estadosService.findOne(estadoData);
    }

    @Get('nome/:nome')
    findByNome(@Param('nome') nome, @Body() estadoData: Estado): Promise<Estado[]> {
      estadoData.nome = String(nome);
      return this.estadosService.findOne(estadoData);
    }

    @Post('create')
    async create(@Body() estadoData: Estado): Promise<any> {
      return this.estadosService.create(estadoData);
    }  

    @Put('update/:id')
    async update(@Param('id') id, @Body() estadoData: Estado): Promise<any> {
        estadoData.id = Number(id);
        console.log('Update #' + estadoData.id)
        return this.estadosService.update(estadoData);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.estadosService.delete(id);
    }  
}
