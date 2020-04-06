import { Controller, Get, Res } from '@nestjs/common';
import { Estado } from './estado.entity';
import { EstadosService } from './estados.service';
import { Post, Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('estados')
export class EstadosController {
    constructor(private estadosService: EstadosService){}

    @Get()
    async index(@Res() res): Promise<Estado[]> {
      if (!(await this.estadosService.findAll())) {
        return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
      }
      return res.status(200).send(await this.estadosService.findAll());
    } 

    @Get('id/:id')
    async findById(@Res() res, @Param('id') id, @Body() estadoData: Estado): Promise<Estado[]> {
      estadoData.id = Number(id);
      let estado = new Estado();

      if (!(estado = await this.estadosService.validaEstado(estadoData))) {
        return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
      }
      return res.status(200).send(await this.estadosService.findOne(estadoData));
    }

    @Get('uf/:uf')
    async findByUf(@Res() res, @Param('uf') uf, @Body() estadoData: Estado): Promise<Estado[]> {
      estadoData.uf = String(uf);
      let estado = new Estado();

      if (!(estado = await this.estadosService.validaEstado(estadoData))) {
        return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
      }
      return res.status(200).send(await this.estadosService.findOne(estadoData));
    }

    @Get('nome/:nome')
    async findByNome(@Res() res, @Param('nome') nome, @Body() estadoData: Estado): Promise<Estado[]> {
      estadoData.nome = String(nome);
      let estado = new Estado();

      if (!(estado = await this.estadosService.validaEstado(estadoData))) {
        return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
      }
      return res.status(200).send(await this.estadosService.findOne(estadoData));
    }

    @Post('create')
    async create(@Res() res, @Body() estadoData: Estado): Promise<any> {
      let estado = new Estado();

      if (estado = await this.estadosService.validaEstado(estadoData)) {
          return res.status(409).send("status: 409 Conflict\nmensagem: O estado já existe!");
      }
      return res.status(201).send(await this.estadosService.create(estadoData));
    }  

    @Put('update/:id')
    async update(@Res() res, @Param('id') id, @Body() estadoData: Estado): Promise<any> {
      estadoData.id = Number(id);
      let estado:boolean = false;

      if (!(estado = await this.estadosService.validaId(estadoData))) {
          return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
      }
      return res.status(200).send(await this.estadosService.update(estadoData));
    }

    @Delete('delete/:id')
    async delete(@Res() res, @Param('id') id): Promise<any> {
      let estado = new Estado();
      estado.id = Number(id);
      
      if (!(await this.estadosService.validaId(estado))) {
        return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
      }
      await this.estadosService.delete(id);
      return res.status(200).send("status: 200 OK\nmensagem: estado removido com sucesso!");
    }  
}
