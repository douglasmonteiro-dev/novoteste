"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTicketDto = void 0;
class CreateTicketDto {
    constructor(name, pass, phone, email) {
        this.name = name.length > 5 ? name : '0';
        this.phone = phone.length > 7 ? phone : '0';
    }
}
exports.CreateTicketDto = CreateTicketDto;
//# sourceMappingURL=create-ticket.dto.js.map