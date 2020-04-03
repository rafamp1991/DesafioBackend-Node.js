import { Controller, Get, Res } from '@nestjs/common';
import { Cidade } from './cidade.entity';
import { CidadesService } from './cidades.service';
import { Post, Put, Delete, Body, Param } from  '@nestjs/common';
import { Estado } from 'src/estados/estado.entity';

@Controller('cidades')
export class CidadesController {
    constructor(private cidadesService: CidadesService){}

    @Get()
    async index(@Res() res): Promise<Cidade[]> {
        if (!(await this.cidadesService.findAll())) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.cidadesService.findAll());
    }
    
    @Get('id/:id')
    async findById(@Res() res, @Param('id') id, @Body() cidadeData: Cidade): Promise<Cidade[]> {
        cidadeData.id = Number(id);
        let cidade = new Cidade();
        
        if (!(cidade = await this.cidadesService.validaCidade(cidadeData))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        } 
        return res.status(200).send(await this.cidadesService.findOne(cidadeData));
    }

    @Get('nome/:nome')
    async findByNome(@Res() res, @Param('nome') nome, @Body() cidadeData: Cidade): Promise<Cidade[]> {
        cidadeData.nome = String(nome);
        let cidade = new Cidade();

        if (!(cidade = await this.cidadesService.validaCidade(cidadeData))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        } 
        return res.status(200).send(await this.cidadesService.findOne(cidadeData));
    }

    @Get('estado/nome/:nome')
    async findByEstadoNome(@Res() res, @Param('nome') nome, @Body() estado: Estado): Promise<Cidade[]> {
        estado.nome = String(nome);
        let estadoData = new Estado();   

        if (!(estadoData =  await this.cidadesService.findByEstado(estado))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.cidadesService.findByEstadoId(estadoData));
    }

    @Get('estado/uf/:uf')
    async findByEstadoUf(@Res() res, @Param('uf') uf, @Body() estado: Estado): Promise<Cidade[]> {
        estado.uf = String(uf);
        let estadoData = new Estado();        
        estadoData = await this.cidadesService.findByEstado(estado);

        if (!(estadoData = await this.cidadesService.findByEstado(estado))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.cidadesService.findByEstadoId(estadoData));
    }

    @Post('create')
    async create(@Res() res, @Body() cidadeData: Cidade): Promise<any> {
        let cidade = new Cidade();

        if (cidade = await this.cidadesService.validaCidade(cidadeData)) {
            return res.status(409).send("status: 409 Conflict\nmensagem: O estado já existe!");
        }
        return res.status(201).send(await this.cidadesService.create(cidadeData));
    }  

    @Put('update/:id')
    async update(@Res() res, @Param('id') id, @Body() cidadeData: Cidade): Promise<any> {
        cidadeData.id = Number(id);
        let cidade:boolean = false;

        if (!(cidade = await this.cidadesService.validaId(cidadeData))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.cidadesService.update(cidadeData));
    }

    @Delete('delete/:id')
    async delete(@Res() res, @Param('id') id): Promise<any> {
      let cidade = new Cidade();
      cidade.id = Number(id);

      if (!(await this.cidadesService.validaId(cidade))) {
        return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
      }
      return res.status(200).send(await this.cidadesService.delete(id));
    }
}
