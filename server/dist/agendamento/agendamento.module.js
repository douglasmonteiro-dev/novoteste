"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendamentosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agenda_service_1 = require("../agenda/agenda.service");
const agendamento_controller_1 = require("./agendamento.controller");
const agendamento_schema_1 = require("./agendamento.schema");
const agenda_schema_1 = require("../agenda/agenda.schema");
const agendamento_service_1 = require("./agendamento.service");
let AgendamentosModule = class AgendamentosModule {
};
AgendamentosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: agendamento_schema_1.Agendamento.name, schema: agendamento_schema_1.AgendamentoSchema }, { name: agenda_schema_1.Agenda.name, schema: agenda_schema_1.AgendaSchema }])
        ],
        controllers: [agendamento_controller_1.AgendamentosController],
        providers: [agendamento_service_1.AgendamentosService, agenda_service_1.AgendasService],
        exports: [agendamento_service_1.AgendamentosService]
    })
], AgendamentosModule);
exports.AgendamentosModule = AgendamentosModule;
//# sourceMappingURL=agendamento.module.js.map