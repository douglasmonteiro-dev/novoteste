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
exports.TicketsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_decorators_1 = require("@nestjs/mongoose/dist/common/mongoose.decorators");
const mongoose_1 = require("mongoose");
const tickets_schema_1 = require("./tickets.schema");
let TicketsService = class TicketsService {
    constructor(ticketModel) {
        this.ticketModel = ticketModel;
    }
    async findAll() {
        return this.ticketModel.find().exec();
    }
    async findOne(cpf) {
        return this.ticketModel.findOne({ cpf: cpf }).exec();
    }
    async findByEmail(email) {
        return this.ticketModel.findOne({ email: email }).exec();
    }
    async updatePass(ticket) {
        return this.ticketModel.updateOne({ "cpf": ticket.cpf }, { $set: { "pass": ticket.pass } }, { upsert: false });
    }
    async create(createTicketDto) {
        if (createTicketDto.email === '0' ||
            createTicketDto.name === '0' ||
            createTicketDto.phone === '0') {
            return null;
        }
        else {
            const createdTicket = new this.ticketModel(createTicketDto);
            return createdTicket.save();
        }
    }
};
TicketsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_decorators_1.InjectModel)(tickets_schema_1.Ticket.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TicketsService);
exports.TicketsService = TicketsService;
//# sourceMappingURL=tickets.service.js.map