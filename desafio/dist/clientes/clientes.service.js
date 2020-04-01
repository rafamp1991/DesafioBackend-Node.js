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
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const cliente_entity_1 = require("./cliente.entity");
const cidade_entity_1 = require("../cidades/cidade.entity");
let ClientesService = class ClientesService {
    constructor(clienteRepository, cidadeRepository) {
        this.clienteRepository = clienteRepository;
        this.cidadeRepository = cidadeRepository;
    }
    async findAll() {
        return await this.clienteRepository.find();
    }
    async findOne(cliente) {
        return await this.clienteRepository.find(cliente);
    }
    async findByCidadeNome(cidade) {
        return await this.cidadeRepository.findOne(cidade);
    }
    async findByCidadeId(cidade) {
        return await this.clienteRepository.find({
            relations: ['cidade'],
            where: {
                cidade: {
                    id: cidade.id
                }
            }
        });
    }
    async create(cliente) {
        return await this.clienteRepository.save(cliente);
    }
    async update(cliente) {
        return await this.clienteRepository.update(cliente.id, cliente);
    }
    async delete(id) {
        return await this.clienteRepository.delete(id);
    }
    async validaCpf(cliente) {
        const clienteData = await this.clienteRepository.findOne({ cpf: cliente.cpf });
        if (clienteData) {
            return true;
        }
        return false;
    }
    async validaId(cliente) {
        const clienteData = await this.clienteRepository.findOne({ id: cliente.id });
        if (clienteData) {
            return true;
        }
        return false;
    }
    async validaCliente(cliente) {
        return await this.clienteRepository.findOne(cliente);
    }
};
ClientesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(cliente_entity_1.Cliente)),
    __param(1, typeorm_2.InjectRepository(cidade_entity_1.Cidade)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ClientesService);
exports.ClientesService = ClientesService;
//# sourceMappingURL=clientes.service.js.map