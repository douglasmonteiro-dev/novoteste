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
exports.OrcamentosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_decorators_1 = require("@nestjs/mongoose/dist/common/mongoose.decorators");
const mongoose_1 = require("mongoose");
const orcamento_schema_1 = require("./orcamento.schema");
let OrcamentosService = class OrcamentosService {
    constructor(orcamentoModel) {
        this.orcamentoModel = orcamentoModel;
    }
    async findAll() {
        return this.orcamentoModel.find().exec();
    }
    async findByUser(userId) {
        return this.orcamentoModel.find({ userId: userId }).exec();
    }
    async findbByAgendaId(agendaId) {
        return this.orcamentoModel.find({ agendaId: agendaId }).exec();
    }
    async findbyService(servico) {
        return this.orcamentoModel.find({ servicoId: servico }).exec();
    }
    async findByInicio(inicio) {
        return this.orcamentoModel.find({ inicio: { $lt: inicio } }).exec();
    }
    async updateOrcamento(orcamento) {
        return this.orcamentoModel.updateOne({ "userId": orcamento.userId, "servicoId": orcamento.servico, "agendaId": orcamento.agendaId }, { $set: orcamento }, { upsert: false });
    }
    async deleteOrcamento(orcamento) {
        return this.orcamentoModel.deleteOne({ "userId": orcamento.userId, "servicoId": orcamento.servicoId, "agendaId": orcamento.agendaId });
    }
    async create(createOrcamentoDto) {
        if (createOrcamentoDto.userId === null ||
            createOrcamentoDto.servicoId === null ||
            createOrcamentoDto.agendaId === null) {
            return null;
        }
        else {
            const createdOrcamento = new this.orcamentoModel(createOrcamentoDto);
            return createdOrcamento.save();
        }
    }
};
OrcamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_decorators_1.InjectModel)(orcamento_schema_1.Orcamento.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], OrcamentosService);
exports.OrcamentosService = OrcamentosService;
//# sourceMappingURL=orcamento.service.js.map