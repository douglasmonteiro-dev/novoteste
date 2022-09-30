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
exports.TicketSchema = exports.Ticket = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const decorators_1 = require("@nestjs/swagger/dist/decorators");
let Ticket = class Ticket {
};
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Ticket.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Number)
], Ticket.prototype, "pass", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Ticket.prototype, "cpf", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Ticket.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Ticket.prototype, "email", void 0);
Ticket = __decorate([
    (0, mongoose_1.Schema)()
], Ticket);
exports.Ticket = Ticket;
exports.TicketSchema = mongoose_1.SchemaFactory.createForClass(Ticket);
//# sourceMappingURL=tickets.schema.js.map