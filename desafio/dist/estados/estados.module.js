"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const estados_service_1 = require("./estados.service");
const estados_controller_1 = require("./estados.controller");
const typeorm_1 = require("@nestjs/typeorm");
const estado_entity_1 = require("./estado.entity");
let EstadosModule = class EstadosModule {
};
EstadosModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([estado_entity_1.Estado]),
        ],
        providers: [estados_service_1.EstadosService],
        controllers: [estados_controller_1.EstadosController]
    })
], EstadosModule);
exports.EstadosModule = EstadosModule;
//# sourceMappingURL=estados.module.js.map