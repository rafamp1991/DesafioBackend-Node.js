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
const estado_entity_1 = require("./estado.entity");
const estados_service_1 = require("./estados.service");
const common_2 = require("@nestjs/common");
let EstadosController = class EstadosController {
    constructor(estadosService) {
        this.estadosService = estadosService;
    }
    index() {
        return this.estadosService.findAll();
    }
    async findById(id, estadoData) {
        estadoData.id = Number(id);
        let estado = new estado_entity_1.Estado();
        estado = await this.estadosService.validaEstado(estadoData);
        if (!estado) {
            throw new common_1.HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.estadosService.findOne(estadoData);
    }
    async findByUf(uf, estadoData) {
        estadoData.uf = String(uf);
        let estado = new estado_entity_1.Estado();
        estado = await this.estadosService.validaEstado(estadoData);
        if (!estado) {
            throw new common_1.HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.estadosService.findOne(estadoData);
    }
    async findByNome(nome, estadoData) {
        estadoData.nome = String(nome);
        let estado = new estado_entity_1.Estado();
        estado = await this.estadosService.validaEstado(estadoData);
        if (!estado) {
            throw new common_1.HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.estadosService.findOne(estadoData);
    }
    async create(estadoData) {
        let estado = new estado_entity_1.Estado();
        estado = await this.estadosService.validaEstado(estadoData);
        if (estado) {
            throw new common_1.HttpException('O estado já existe.', 409);
        }
        return this.estadosService.create(estadoData);
    }
    async update(id, estadoData) {
        estadoData.id = Number(id);
        let estado = false;
        estado = await this.estadosService.validaId(estadoData);
        if (estado == false) {
            throw new common_1.HttpException('Não foi possível encontrar o recurso especificado.', 404);
        }
        return this.estadosService.update(estadoData);
    }
    async delete(id) {
        return this.estadosService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "index", null);
__decorate([
    common_1.Get('id/:id'),
    __param(0, common_2.Param('id')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, estado_entity_1.Estado]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "findById", null);
__decorate([
    common_1.Get('uf/:uf'),
    __param(0, common_2.Param('uf')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, estado_entity_1.Estado]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "findByUf", null);
__decorate([
    common_1.Get('nome/:nome'),
    __param(0, common_2.Param('nome')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, estado_entity_1.Estado]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "findByNome", null);
__decorate([
    common_2.Post('create'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [estado_entity_1.Estado]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "create", null);
__decorate([
    common_2.Put('update/:id'),
    __param(0, common_2.Param('id')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, estado_entity_1.Estado]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "update", null);
__decorate([
    common_2.Delete('delete/:id'),
    __param(0, common_2.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "delete", null);
EstadosController = __decorate([
    common_1.Controller('estados'),
    __metadata("design:paramtypes", [estados_service_1.EstadosService])
], EstadosController);
exports.EstadosController = EstadosController;
//# sourceMappingURL=estados.controller.js.map