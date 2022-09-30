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
exports.AgendasController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agenda_schema_1 = require("./agenda.schema");
const api_use_tags_decorator_1 = require("@nestjs/swagger/dist/decorators/api-use-tags.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const agenda_service_1 = require("./agenda.service");
const agendamento_service_1 = require("../agendamento/agendamento.service");
let AgendasController = class AgendasController {
    constructor(model, agendaService, agendamentoService) {
        this.model = model;
        this.agendaService = agendaService;
        this.agendamentoService = agendamentoService;
    }
    async find_by_inicio(req) {
        const agendas = await this.agendaService.findAll();
        for (let agenda of agendas) {
            agenda.agendamentos = await this.agendamentoService.findbByAgendaId(agenda._id);
        }
        const retorno = { agendas: agendas, user: req.userId };
        return retorno;
    }
    async reset_password(req) {
        const retorno = await this.agendaService.create(req.body);
        return retorno;
    }
    async find_by_user(req) {
        const retorno = await this.agendaService.findbyUser(req.body);
        return retorno;
    }
    async delete(req) {
        const retorno = await this.agendaService.deleteAgenda(req.body);
        return retorno;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendasController.prototype, "find_by_inicio", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('nova'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendasController.prototype, "reset_password", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('selecionar'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendasController.prototype, "find_by_user", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('apagar'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendasController.prototype, "delete", null);
AgendasController = __decorate([
    (0, api_use_tags_decorator_1.ApiTags)('Agendas'),
    (0, common_1.Controller)('agenda'),
    __param(0, (0, mongoose_1.InjectModel)(agenda_schema_1.Agenda.name)),
    __metadata("design:paramtypes", [Object, agenda_service_1.AgendasService, agendamento_service_1.AgendamentosService])
], AgendasController);
exports.AgendasController = AgendasController;
//# sourceMappingURL=agenda.controller.js.map