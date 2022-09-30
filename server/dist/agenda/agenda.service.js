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
exports.AgendasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_decorators_1 = require("@nestjs/mongoose/dist/common/mongoose.decorators");
const mongoose_1 = require("mongoose");
const agenda_schema_1 = require("./agenda.schema");
let AgendasService = class AgendasService {
    constructor(agendaModel) {
        this.agendaModel = agendaModel;
    }
    async findAll() {
        return this.agendaModel.find().exec();
    }
    async findbyUser(userId) {
        return this.agendaModel.find({ userId: userId }).exec();
    }
    async findbyService(servico) {
        return this.agendaModel.find({ servico: servico }).exec();
    }
    async findByInicio(inicio) {
        return this.agendaModel.find({ inicio: { $lt: inicio } }).exec();
    }
    async find(params) {
        return this.agendaModel.find(params).exec();
    }
    async updateAgenda(agenda) {
        return this.agendaModel.updateOne({ "userId": agenda.userId, "servico": agenda.servico, "inicio": agenda.inicio }, { $set: agenda }, { upsert: false });
    }
    async deleteAgenda(agenda) {
        return this.agendaModel.deleteOne({ "userId": agenda.userId, "servico": agenda.servico, "inicio": agenda.inicio });
    }
    async create(createAgendaDto) {
        if (createAgendaDto.inicio === null ||
            createAgendaDto.fim === null ||
            createAgendaDto.userId === null) {
            return null;
        }
        else {
            const createdAgenda = new this.agendaModel(createAgendaDto);
            return createdAgenda.save();
        }
    }
};
AgendasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_decorators_1.InjectModel)(agenda_schema_1.Agenda.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AgendasService);
exports.AgendasService = AgendasService;
//# sourceMappingURL=agenda.service.js.map