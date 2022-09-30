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
exports.AgendaSchema = exports.Agenda = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const decorators_1 = require("@nestjs/swagger/dist/decorators");
let Agenda = class Agenda {
};
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agenda.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agenda.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agenda.prototype, "servico", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Date)
], Agenda.prototype, "inicio", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Date)
], Agenda.prototype, "fim", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agenda.prototype, "horaInicio", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agenda.prototype, "horaFim", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Number)
], Agenda.prototype, "tempoAtendimento", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agenda.prototype, "endereco", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agenda.prototype, "lat", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agenda.prototype, "lng", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agenda.prototype, "valor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agenda.prototype, "formaPagamento", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Array)
], Agenda.prototype, "agendamentos", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Agenda.prototype, "diasDaSemana", void 0);
Agenda = __decorate([
    (0, mongoose_1.Schema)()
], Agenda);
exports.Agenda = Agenda;
exports.AgendaSchema = mongoose_1.SchemaFactory.createForClass(Agenda);
//# sourceMappingURL=agenda.schema.js.map