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
exports.ServicosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_decorators_1 = require("@nestjs/mongoose/dist/common/mongoose.decorators");
const mongoose_1 = require("mongoose");
const servico_schema_1 = require("./servico.schema");
let ServicosService = class ServicosService {
    constructor(servicoModel) {
        this.servicoModel = servicoModel;
    }
    async findAll() {
        return this.servicoModel.find().exec();
    }
    async findById(userId) {
        return this.servicoModel.findOne({ _id: userId }).exec();
    }
    async findOne(name) {
        return this.servicoModel.findOne({ name: name }).exec();
    }
    async create(createServicoDto) {
        if (createServicoDto.name === null ||
            createServicoDto.descricao === null ||
            createServicoDto.valor === null) {
            return null;
        }
        else {
            const createdServico = new this.servicoModel(createServicoDto);
            return createdServico.save();
        }
    }
    async delete(servico) {
        return this.servicoModel.deleteOne({ "name": servico.name, "servico": servico.valor });
    }
};
ServicosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_decorators_1.InjectModel)(servico_schema_1.Servico.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ServicosService);
exports.ServicosService = ServicosService;
//# sourceMappingURL=servico.service.js.map