"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcamentosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agenda_service_1 = require("../agenda/agenda.service");
const orcamento_controller_1 = require("./orcamento.controller");
const orcamento_schema_1 = require("./orcamento.schema");
const agenda_schema_1 = require("../agenda/agenda.schema");
const orcamento_service_1 = require("./orcamento.service");
let OrcamentosModule = class OrcamentosModule {
};
OrcamentosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: orcamento_schema_1.Orcamento.name, schema: orcamento_schema_1.OrcamentoSchema }, { name: agenda_schema_1.Agenda.name, schema: agenda_schema_1.AgendaSchema }])
        ],
        controllers: [orcamento_controller_1.OrcamentosController],
        providers: [orcamento_service_1.OrcamentosService, agenda_service_1.AgendasService],
        exports: [orcamento_service_1.OrcamentosService]
    })
], OrcamentosModule);
exports.OrcamentosModule = OrcamentosModule;
//# sourceMappingURL=orcamento.module.js.map