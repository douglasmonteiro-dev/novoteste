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
exports.AgendamentoSchema = exports.Agendamento = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const decorators_1 = require("@nestjs/swagger/dist/decorators");
let Agendamento = class Agendamento {
};
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agendamento.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agendamento.prototype, "agendaId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agendamento.prototype, "servicoId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Date)
], Agendamento.prototype, "data", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agendamento.prototype, "hora", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agendamento.prototype, "minutos", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agendamento.prototype, "servico", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agendamento.prototype, "nome", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agendamento.prototype, "profissional", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agendamento.prototype, "tempoAtendimento", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Agendamento.prototype, "pagamento", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Agendamento.prototype, "confirmado", void 0);
Agendamento = __decorate([
    (0, mongoose_1.Schema)()
], Agendamento);
exports.Agendamento = Agendamento;
exports.AgendamentoSchema = mongoose_1.SchemaFactory.createForClass(Agendamento);
//# sourceMappingURL=agendamento.schema.js.map