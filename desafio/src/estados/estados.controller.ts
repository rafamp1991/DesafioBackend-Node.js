import { Controller, Get, HttpException } from '@nestjs/common';
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
    async findById(@Param('id') id, @Body() estadoData: Estado): Promise<Estado[]> {
      estadoData.id = Number(id);
      let estado = new Estado();
      estado = await this.estadosService.validaEstado(estadoData);

      if (!estado) {
          throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
      }
      return this.estadosService.findOne(estadoData);
    }

    @Get('uf/:uf')
    async findByUf(@Param('uf') uf, @Body() estadoData: Estado): Promise<Estado[]> {
      estadoData.uf = String(uf);
      let estado = new Estado();
      estado = await this.estadosService.validaEstado(estadoData);

      if (!estado) {
          throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
      }
      return this.estadosService.findOne(estadoData);
    }

    @Get('nome/:nome')
    async findByNome(@Param('nome') nome, @Body() estadoData: Estado): Promise<Estado[]> {
      estadoData.nome = String(nome);
      let estado = new Estado();
      estado = await this.estadosService.validaEstado(estadoData);

      if (!estado) {
          throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
      }
      return this.estadosService.findOne(estadoData);
    }

    @Post('create')
    async create(@Body() estadoData: Estado): Promise<any> {
      let estado = new Estado();
      estado = await this.estadosService.validaEstado(estadoData);

      if (estado) {
          throw new HttpException('O estado já existe.', 409);
      }
      return this.estadosService.create(estadoData);
    }  

    @Put('update/:id')
    async update(@Param('id') id, @Body() estadoData: Estado): Promise<any> {
      estadoData.id = Number(id);
      let estado = false;
      estado = await this.estadosService.validaId(estadoData);

      if (estado == false) {
        throw new HttpException('Não foi possível encontrar o recurso especificado.', 404);
      }
      return this.estadosService.update(estadoData);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.estadosService.delete(id);
    }  
}
