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
exports.ServicoSchema = exports.Servico = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const decorators_1 = require("@nestjs/swagger/dist/decorators");
let Servico = class Servico {
};
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Servico.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Servico.prototype, "descricao", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Servico.prototype, "instrucao", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Servico.prototype, "endereco", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Servico.prototype, "valor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Servico.prototype, "formaPagamento", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Servico.prototype, "tempoAtendimento", void 0);
Servico = __decorate([
    (0, mongoose_1.Schema)()
], Servico);
exports.Servico = Servico;
exports.ServicoSchema = mongoose_1.SchemaFactory.createForClass(Servico);
//# sourceMappingURL=servico.schema.js.map