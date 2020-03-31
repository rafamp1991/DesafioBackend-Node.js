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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const cidade_entity_1 = require("../cidades/cidade.entity");
let Cliente = class Cliente {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "integer"
    }),
    __metadata("design:type", Number)
], Cliente.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 60
    }),
    __metadata("design:type", String)
], Cliente.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 80
    }),
    __metadata("design:type", String)
], Cliente.prototype, "sobrenome", void 0);
__decorate([
    typeorm_1.Column({
        unique: true,
        type: "varchar",
        length: 14
    }),
    __metadata("design:type", String)
], Cliente.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 40
    }),
    __metadata("design:type", String)
], Cliente.prototype, "sexo", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Cliente.prototype, "dataNascimento", void 0);
__decorate([
    typeorm_1.Column({
        type: "integer"
    }),
    __metadata("design:type", Number)
], Cliente.prototype, "idade", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cidade_entity_1.Cidade, cidade => cidade.clientes),
    __metadata("design:type", cidade_entity_1.Cidade)
], Cliente.prototype, "cidade", void 0);
Cliente = __decorate([
    typeorm_1.Entity({ name: "clientes" })
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.entity.js.map