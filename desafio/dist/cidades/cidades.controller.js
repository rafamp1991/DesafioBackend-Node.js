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
    index() {
        return this.cidadesService.findAll();
    }
    async findById(id, cidadeData) {
        cidadeData.id = Number(id);
        let cidade = new cidade_entity_1.Cidade();
        cidade = await this.cidadesService.validaCidade(cidadeData);
        if (!cidade) {
            throw new common_1.HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.cidadesService.findOne(cidadeData);
    }
    async findByNome(nome, cidadeData) {
        cidadeData.nome = String(nome);
        let cidade = new cidade_entity_1.Cidade();
        cidade = await this.cidadesService.validaCidade(cidadeData);
        if (!cidade) {
            throw new common_1.HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.cidadesService.findOne(cidadeData);
    }
    async findByEstadoNome(nome, estado) {
        estado.nome = String(nome);
        let estadoData = new estado_entity_1.Estado();
        estadoData = await this.cidadesService.findByEstado(estado);
        if (!estadoData) {
            throw new common_1.HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.cidadesService.findByEstadoId(estadoData);
    }
    async findByEstadoUf(uf, estado) {
        estado.uf = String(uf);
        let estadoData = new estado_entity_1.Estado();
        estadoData = await this.cidadesService.findByEstado(estado);
        if (!estadoData) {
            throw new common_1.HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.cidadesService.findByEstadoId(estadoData);
    }
    async create(cidadeData) {
        let cidade = new cidade_entity_1.Cidade();
        cidade = await this.cidadesService.validaCidade(cidadeData);
        if (cidade) {
            throw new common_1.HttpException('A cidade já existe.', 409);
        }
        return this.cidadesService.create(cidadeData);
    }
    async update(id, cidadeData) {
        cidadeData.id = Number(id);
        let cidade = false;
        cidade = await this.cidadesService.validaId(cidadeData);
        if (cidade == false) {
            throw new common_1.HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.cidadesService.update(cidadeData);
    }
    async delete(id) {
        return this.cidadesService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "index", null);
__decorate([
    common_1.Get('id/:id'),
    __param(0, common_2.Param('id')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cidade_entity_1.Cidade]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "findById", null);
__decorate([
    common_1.Get('nome/:nome'),
    __param(0, common_2.Param('nome')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cidade_entity_1.Cidade]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "findByNome", null);
__decorate([
    common_1.Get('estado/nome/:nome'),
    __param(0, common_2.Param('nome')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, estado_entity_1.Estado]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "findByEstadoNome", null);
__decorate([
    common_1.Get('estado/uf/:uf'),
    __param(0, common_2.Param('uf')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, estado_entity_1.Estado]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "findByEstadoUf", null);
__decorate([
    common_2.Post('create'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cidade_entity_1.Cidade]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "create", null);
__decorate([
    common_2.Put('update/:id'),
    __param(0, common_2.Param('id')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cidade_entity_1.Cidade]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "update", null);
__decorate([
    common_2.Delete('delete/:id'),
    __param(0, common_2.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "delete", null);
CidadesController = __decorate([
    common_1.Controller('cidades'),
    __metadata("design:paramtypes", [cidades_service_1.CidadesService])
], CidadesController);
exports.CidadesController = CidadesController;
//# sourceMappingURL=cidades.controller.js.map