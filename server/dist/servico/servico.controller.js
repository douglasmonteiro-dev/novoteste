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
exports.ServicosController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const servico_schema_1 = require("./servico.schema");
const api_use_tags_decorator_1 = require("@nestjs/swagger/dist/decorators/api-use-tags.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const servico_service_1 = require("./servico.service");
let ServicosController = class ServicosController {
    constructor(model, servicoService) {
        this.model = model;
        this.servicoService = servicoService;
    }
    async find_all(req) {
        const retorno = await this.servicoService.findAll();
        return retorno;
    }
    async create(req) {
        const retorno = await this.servicoService.create(req.body);
        return retorno;
    }
    async select(req) {
        const retorno = await this.servicoService.findById(req.body);
        return retorno;
    }
    async delete(req) {
        const retorno = await this.servicoService.delete(req.body);
        return retorno;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServicosController.prototype, "find_all", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('novo'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServicosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('selecionar'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServicosController.prototype, "select", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('apagar'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServicosController.prototype, "delete", null);
ServicosController = __decorate([
    (0, api_use_tags_decorator_1.ApiTags)('Servicos'),
    (0, common_1.Controller)('servico'),
    __param(0, (0, mongoose_1.InjectModel)(servico_schema_1.Servico.name)),
    __metadata("design:paramtypes", [Object, servico_service_1.ServicosService])
], ServicosController);
exports.ServicosController = ServicosController;
//# sourceMappingURL=servico.controller.js.map