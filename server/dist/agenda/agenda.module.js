"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendasModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const agendamento_schema_1 = require("../agendamento/agendamento.schema");
const agendamento_service_1 = require("../agendamento/agendamento.service");
const agenda_controller_1 = require("./agenda.controller");
const agenda_schema_1 = require("./agenda.schema");
const agenda_service_1 = require("./agenda.service");
let AgendasModule = class AgendasModule {
};
AgendasModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: agenda_schema_1.Agenda.name, schema: agenda_schema_1.AgendaSchema }, { name: agendamento_schema_1.Agendamento.name, schema: agendamento_schema_1.AgendamentoSchema }])],
        controllers: [agenda_controller_1.AgendasController],
        providers: [agenda_service_1.AgendasService, agendamento_service_1.AgendamentosService],
        exports: [agenda_service_1.AgendasService]
    })
], AgendasModule);
exports.AgendasModule = AgendasModule;
//# sourceMappingURL=agenda.module.js.map