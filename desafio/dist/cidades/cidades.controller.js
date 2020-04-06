"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cidade_entity_1 = require("./cidade.entity");
const cidades_service_1 = require("./cidades.service");
const common_2 = require("@nestjs/common");
const estado_entity_1 = require("../estados/estado.entity");
let CidadesController = class CidadesController {
    constructor(cidadesService) {
        this.cidadesService = cidadesService;
    }
    async index(res) {
        if (!(await this.cidadesService.findAll())) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.cidadesService.findAll());
    }
    async findById(res, id, cidadeData) {
        cidadeData.id = Number(id);
        let cidade = new cidade_entity_1.Cidade();
        if (!(cidade = await this.cidadesService.validaCidade(cidadeData))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.cidadesService.findOne(cidadeData));
    }
    async findByNome(res, nome, cidadeData) {
        cidadeData.nome = String(nome);
        let cidade = new cidade_entity_1.Cidade();
        if (!(cidade = await this.cidadesService.validaCidade(cidadeData))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.cidadesService.findOne(cidadeData));
    }
    async findByEstadoNome(res, nome, estado) {
        estado.nome = String(nome);
        let estadoData = new estado_entity_1.Estado();
        if (!(estadoData = await this.cidadesService.findByEstado(estado))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.cidadesService.findByEstadoId(estadoData));
    }
    async findByEstadoUf(res, uf, estado) {
        estado.uf = String(uf);
        let estadoData = new estado_entity_1.Estado();
        estadoData = await this.cidadesService.findByEstado(estado);
        if (!(estadoData = await this.cidadesService.findByEstado(estado))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.cidadesService.findByEstadoId(estadoData));
    }
    async create(res, cidadeData) {
        let cidade = new cidade_entity_1.Cidade();
        if (cidade = await this.cidadesService.validaCidade(cidadeData)) {
            return res.status(409).send("status: 409 Conflict\nmensagem: O estado já existe!");
        }
        return res.status(201).send(await this.cidadesService.create(cidadeData));
    }
    async update(res, id, cidadeData) {
        cidadeData.id = Number(id);
        let cidade = false;
        if (!(cidade = await this.cidadesService.validaId(cidadeData))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        return res.status(200).send(await this.cidadesService.update(cidadeData));
    }
    async delete(res, id) {
        let cidade = new cidade_entity_1.Cidade();
        cidade.id = Number(id);
        if (!(await this.cidadesService.validaId(cidade))) {
            return res.status(404).send("status: 404 Not Found\nmensagem: Não foi possível encontrar o recurso especificado!");
        }
        await this.cidadesService.delete(id);
        return res.status(200).send("status: 200 OK\nmensagem: cidade removida com sucesso!");
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "index", null);
__decorate([
    common_1.Get('id/:id'),
    __param(0, common_1.Res()), __param(1, common_2.Param('id')), __param(2, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, cidade_entity_1.Cidade]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "findById", null);
__decorate([
    common_1.Get('nome/:nome'),
    __param(0, common_1.Res()), __param(1, common_2.Param('nome')), __param(2, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, cidade_entity_1.Cidade]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "findByNome", null);
__decorate([
    common_1.Get('estado/nome/:nome'),
    __param(0, common_1.Res()), __param(1, common_2.Param('nome')), __param(2, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, estado_entity_1.Estado]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "findByEstadoNome", null);
__decorate([
    common_1.Get('estado/uf/:uf'),
    __param(0, common_1.Res()), __param(1, common_2.Param('uf')), __param(2, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, estado_entity_1.Estado]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "findByEstadoUf", null);
__decorate([
    common_2.Post('create'),
    __param(0, common_1.Res()), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cidade_entity_1.Cidade]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "create", null);
__decorate([
    common_2.Put('update/:id'),
    __param(0, common_1.Res()), __param(1, common_2.Param('id')), __param(2, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, cidade_entity_1.Cidade]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "update", null);
__decorate([
    common_2.Delete('delete/:id'),
    __param(0, common_1.Res()), __param(1, common_2.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "delete", null);
CidadesController = __decorate([
    common_1.Controller('cidades'),
    __metadata("design:paramtypes", [cidades_service_1.CidadesService])
], CidadesController);
exports.CidadesController = CidadesController;
//# sourceMappingURL=cidades.controller.js.map