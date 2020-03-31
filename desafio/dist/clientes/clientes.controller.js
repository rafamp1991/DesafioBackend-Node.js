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
const cliente_entity_1 = require("./cliente.entity");
const clientes_service_1 = require("./clientes.service");
const common_2 = require("@nestjs/common");
const cidade_entity_1 = require("../cidades/cidade.entity");
let ClientesController = class ClientesController {
    constructor(clientesService) {
        this.clientesService = clientesService;
    }
    index() {
        return this.clientesService.findAll();
    }
    findById(id, clienteData) {
        clienteData.id = Number(id);
        return this.clientesService.findOne(clienteData);
    }
    findByNome(nome, clienteData) {
        clienteData.nome = String(nome);
        return this.clientesService.findOne(clienteData);
    }
    async findByCidadeNome(nome, cidade) {
        cidade.nome = String(nome);
        console.log('Cidade Controller: ' + cidade.nome);
        let cidadeData = new cidade_entity_1.Cidade();
        cidadeData = await this.clientesService.findByCidadeNome(cidade);
        return this.clientesService.findByCidadeId(cidadeData);
    }
    async create(clienteData) {
        return this.clientesService.create(clienteData);
    }
    async update(id, clienteData) {
        clienteData.id = Number(id);
        console.log('Update #' + clienteData.id);
        return this.clientesService.update(clienteData);
    }
    async delete(id) {
        return this.clientesService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "index", null);
__decorate([
    common_1.Get('id/:id'),
    __param(0, common_2.Param('id')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cliente_entity_1.Cliente]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "findById", null);
__decorate([
    common_1.Get('nome/:nome'),
    __param(0, common_2.Param('nome')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cliente_entity_1.Cliente]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "findByNome", null);
__decorate([
    common_1.Get('cidade/:nome'),
    __param(0, common_2.Param('nome')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cidade_entity_1.Cidade]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "findByCidadeNome", null);
__decorate([
    common_2.Post('create'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cliente_entity_1.Cliente]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "create", null);
__decorate([
    common_2.Put(':id/update'),
    __param(0, common_2.Param('id')), __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cliente_entity_1.Cliente]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "update", null);
__decorate([
    common_2.Delete(':id/delete'),
    __param(0, common_2.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "delete", null);
ClientesController = __decorate([
    common_1.Controller('clientes'),
    __metadata("design:paramtypes", [clientes_service_1.ClientesService])
], ClientesController);
exports.ClientesController = ClientesController;
//# sourceMappingURL=clientes.controller.js.map