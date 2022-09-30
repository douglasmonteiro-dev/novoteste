"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_module_1 = require("@nestjs/config/dist/config.module");
const mongoose_module_1 = require("@nestjs/mongoose/dist/mongoose.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const venom_service_1 = require("./venom/venom.service");
const nlp_service_1 = require("./nlp/nlp.service");
const tickets_module_1 = require("./tickets/tickets.module");
const agenda_module_1 = require("./agenda/agenda.module");
const servico_module_1 = require("./servico/servico.module");
const agendamento_module_1 = require("./agendamento/agendamento.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.ConfigModule.forRoot({ envFilePath: `env.${process.env.NODE_ENV}` }),
            mongoose_module_1.MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}:${process.env.DB_PORT}`),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            tickets_module_1.TicketsModule,
            agenda_module_1.AgendasModule,
            servico_module_1.ServicosModule,
            agendamento_module_1.AgendamentosModule
        ],
        providers: [venom_service_1.VenomService, nlp_service_1.NlpService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map