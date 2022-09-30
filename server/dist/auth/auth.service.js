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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("@nestjs/jwt/dist/jwt.service");
const users_service_1 = require("../users/users.service");
const nest_mailman_1 = require("@squareboat/nest-mailman");
const venom_service_1 = require("../venom/venom.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, venomService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.venomService = venomService;
    }
    async validateUser(cpf, pass) {
        const user = await this.usersService.findOne(cpf);
        console.log('USER', user.pass);
        console.log('pass', pass);
        if (user.pass === pass) {
            const { pass } = user, result = __rest(user, ["pass"]);
            return result;
        }
        return false;
    }
    async login(_user) {
        const user = await this.usersService.findOne(_user.cpf);
        if (user) {
            const payload = { nome: user.name, sub: user.phone };
            await this.venomService.sendMessage(user.phone, 'Você acabou de fazer login no site da Casa de Sistemas');
            return { user: { name: user.name, _id: user.phone, token: this.jwtService.sign(payload) } };
        }
        else {
            return { code: 403, message: 'login invalido' };
        }
    }
    async register(_entrada, _response) {
        if (await this.usersService.findOne(_entrada.cpf)) {
            return _response.status(403).json({ code: 403, message: 'usuário ja existe' });
        }
        else {
            this.venomService.userVerify(_entrada.phone)
                .then(async (retorno) => {
                console.log('*******RETORNO', retorno);
                if (retorno) {
                    await this.venomService.sendMessage(_entrada.phone, 'Seja Bem Vindo a Casa de Sistemas');
                    const user = await this.usersService.create(_entrada);
                    if (user !== null) {
                        const { pass, cpf } = user, result = __rest(user, ["pass", "cpf"]);
                        const payload = { nome: user.name, sub: user.phone };
                        return { user: { name: user.name, _id: result, token: this.jwtService.sign(payload) } };
                    }
                    else {
                        return _response.status(403).json({ code: 406, message: 'dados invalidos' });
                    }
                }
                else {
                    return _response.status(403).json({ code: 406, message: 'dados invalidos' });
                }
            }).catch((e) => {
                console.log('***ERRO ', e);
                return _response.status(e.status).json({ code: e.status, message: e.text });
            });
        }
    }
    async resetPassword(_entrada) {
        const user = await this.usersService.findByEmail(_entrada.email);
        if (user !== null) {
            const payload = this.jwtService.verify(_entrada.token);
            const date = new Date();
            if (payload.exp > parseInt((date.getTime() / 1000).toFixed(0))) {
                if (payload.sub === _entrada.email) {
                    user.pass = _entrada.password;
                    await this.usersService.updatePass(user);
                    const { pass, cpf } = user, result = __rest(user, ["pass", "cpf"]);
                    const payloadToken = { nome: user.name, sub: user.cpf };
                    return { user: { name: user.name, _id: user.cpf, token: this.jwtService.sign(payloadToken) } };
                }
                else {
                    return 'Token Invalido';
                }
            }
            else {
                return 'Token Expirado';
            }
        }
        else {
            return { code: 406, message: 'email não cadastrado' };
        }
    }
    async forgotPassword(_entrada) {
        const user = await this.usersService.findByEmail(_entrada.email);
        if (user !== null) {
            const { pass, cpf } = user, result = __rest(user, ["pass", "cpf"]);
            const payload = { nome: result.phone, sub: user.email };
            const mail = nest_mailman_1.MailMessage.init()
                .greeting(`Olá ${user.name}`)
                .line('Este é um email automático, para recuperação de senha!')
                .action('Recuperar Senha', `http://localhost:4200/forgot-password/${this.jwtService.sign(payload)}`)
                .line('Caso você não tenha solicitado a recuperação da sua senha, por favor desconsidere essa mensagem.')
                .subject('Recuperação de Senha');
            nest_mailman_1.Mailman.init()
                .to(user.email)
                .send(mail);
            return true;
        }
        else {
            return 'e-mail não cadastrado';
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_service_1.JwtService, venom_service_1.VenomService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map