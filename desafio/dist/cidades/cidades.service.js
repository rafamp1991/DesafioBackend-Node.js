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
const cidade_entity_1 = require("./cidade.entity");
const estado_entity_1 = require("../estados/estado.entity");
let CidadesService = class CidadesService {
    constructor(cidadeRepository, estadoRepository) {
        this.cidadeRepository = cidadeRepository;
        this.estadoRepository = estadoRepository;
    }
    async findAll() {
        return await this.cidadeRepository.find();
    }
    async findOne(cidade) {
        return await this.cidadeRepository.find(cidade);
    }
    async findByEstado(estado) {
        return await this.estadoRepository.findOne(estado);
    }
    async findByEstadoId(estado) {
        return await this.cidadeRepository.find({
            relations: ['estado'],
            where: {
                estado: {
                    id: estado.id
                }
            }
        });
    }
    async create(cidade) {
        return await this.cidadeRepository.save(cidade);
    }
    async update(cidade) {
        return await this.cidadeRepository.update(cidade.id, cidade);
    }
    async delete(id) {
        return await this.cidadeRepository.delete(id);
    }
    async validaId(cidade) {
        const cidadeData = await this.cidadeRepository.findOne({ id: cidade.id });
        if (cidadeData) {
            return true;
        }
        return false;
    }
    async validaCidade(cidade) {
        return await this.cidadeRepository.findOne(cidade);
    }
};
CidadesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(cidade_entity_1.Cidade)),
    __param(1, typeorm_2.InjectRepository(estado_entity_1.Estado)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], CidadesService);
exports.CidadesService = CidadesService;
//# sourceMappingURL=cidades.service.js.map