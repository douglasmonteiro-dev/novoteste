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
exports.AgendamentosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_decorators_1 = require("@nestjs/mongoose/dist/common/mongoose.decorators");
const mongoose_1 = require("mongoose");
const agendamento_schema_1 = require("./agendamento.schema");
let AgendamentosService = class AgendamentosService {
    constructor(agendamentoModel) {
        this.agendamentoModel = agendamentoModel;
    }
    async findAll() {
        return this.agendamentoModel.find().exec();
    }
    async findByUser(userId) {
        return this.agendamentoModel.find({ userId: userId }).exec();
    }
    async findbByAgendaId(agendaId) {
        return this.agendamentoModel.find({ agendaId: agendaId }).exec();
    }
    async findbyService(servico) {
        return this.agendamentoModel.find({ servicoId: servico }).exec();
    }
    async findByInicio(inicio) {
        return this.agendamentoModel.find({ inicio: { $lt: inicio } }).exec();
    }
    async updateAgendamento(agendamento) {
        return this.agendamentoModel.updateOne({ "userId": agendamento.userId, "servicoId": agendamento.servico, "agendaId": agendamento.agendaId }, { $set: agendamento }, { upsert: false });
    }
    async deleteAgendamento(agendamento) {
        return this.agendamentoModel.deleteOne({ "userId": agendamento.userId, "servicoId": agendamento.servicoId, "agendaId": agendamento.agendaId });
    }
    async create(createAgendamentoDto) {
        if (createAgendamentoDto.userId === null ||
            createAgendamentoDto.servicoId === null ||
            createAgendamentoDto.agendaId === null) {
            return null;
        }
        else {
            const createdAgendamento = new this.agendamentoModel(createAgendamentoDto);
            return createdAgendamento.save();
        }
    }
};
AgendamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_decorators_1.InjectModel)(agendamento_schema_1.Agendamento.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AgendamentosService);
exports.AgendamentosService = AgendamentosService;
//# sourceMappingURL=agendamento.service.js.map