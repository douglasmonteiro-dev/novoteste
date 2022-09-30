"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServicoDto = void 0;
class CreateServicoDto {
    constructor(name, descricao, valor) {
        this.name = name.length > 3 ? name : '0';
    }
}
exports.CreateServicoDto = CreateServicoDto;
//# sourceMappingURL=create-servico.dto.js.map