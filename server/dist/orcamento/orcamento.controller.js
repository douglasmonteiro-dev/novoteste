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
exports.OrcamentosController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const orcamento_schema_1 = require("./orcamento.schema");
const api_use_tags_decorator_1 = require("@nestjs/swagger/dist/decorators/api-use-tags.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const orcamento_service_1 = require("./orcamento.service");
const agenda_service_1 = require("../agenda/agenda.service");
let OrcamentosController = class OrcamentosController {
    constructor(model, agendaService, orcamentoService) {
        this.model = model;
        this.agendaService = agendaService;
        this.orcamentoService = orcamentoService;
    }
    async find_by_inicio(req) {
        const retorno = await this.orcamentoService.findByUser(req.body);
        return retorno;
    }
    async dias_disponiveis(req) {
        const retorno = await this.agendaService.find({ inicio: { $lte: req.query.inicio }, fim: { $gte: req.query.fim } });
        return retorno;
    }
    async agendas_disponiveis(req) {
        const dia = new Date();
        let agendas = await this.agendaService.find({ inicio: { $lte: req.query.dia }, fim: { $gte: req.query.dia } });
        for (let agenda of agendas) {
            agenda.agendamentos = await this.orcamentoService.findbByAgendaId(agenda._id);
        }
        const retorno = { agendas: agendas, user: req.userId };
        return retorno;
    }
    async delete(req) {
        const retorno = await this.orcamentoService.deleteOrcamento(req.body);
        return retorno;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrcamentosController.prototype, "find_by_inicio", null);
__decorate([
    (0, common_1.Get)('dias-disponiveis'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrcamentosController.prototype, "dias_disponiveis", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('agendas-disponiveis'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrcamentosController.prototype, "agendas_disponiveis", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('apagar'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrcamentosController.prototype, "delete", null);
OrcamentosController = __decorate([
    (0, api_use_tags_decorator_1.ApiTags)('Orcamentos'),
    (0, common_1.Controller)('orcamento'),
    __param(0, (0, mongoose_1.InjectModel)(orcamento_schema_1.Orcamento.name)),
    __metadata("design:paramtypes", [Object, agenda_service_1.AgendasService, orcamento_service_1.OrcamentosService])
], OrcamentosController);
exports.OrcamentosController = OrcamentosController;
//# sourceMappingURL=orcamento.controller.js.map