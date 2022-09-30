import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { UsersService } from 'src/users/users.service';
import { Mailman, MailMessage } from '@squareboat/nest-mailman';
import { VenomService } from 'src/venom/venom.service';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService, private venomService: VenomService) { }

  async validateUser(cpf: string, pass: number): Promise<any> {
    const user = await this.usersService.findOne(cpf);
    console.log('USER', user.pass)
    console.log('pass', pass)
    if (user.pass === pass) {
      const { pass, ...result } = user;
      return result;
    }
    return false;
  }

  async login(_user: any) {
    const user = await this.usersService.findOne(_user.cpf);
    if (user) {
      const payload = { nome: user.name, sub: user.phone };
      await this.venomService.sendMessage(user.phone, 'Você acabou de fazer login no site da Casa de Sistemas')
      return { user: { name: user.name, _id: user.phone, token: this.jwtService.sign(payload) } }
    } else {
      return {code: 403, message: 'login invalido'};
    }
  }

  async register(_entrada: any, _response: any) {
    if (await this.usersService.findOne(_entrada.cpf)) {
      return _response.status(403).json({code: 403, message: 'usuário ja existe'});
    } else {
      this.venomService.userVerify(_entrada.phone)
      .then(async(retorno)=>{
        console.log('*******RETORNO', retorno)
        if (retorno) {
          await this.venomService.sendMessage(_entrada.phone, 'Seja Bem Vindo a Casa de Sistemas')
          const user = await this.usersService.create(_entrada);
          if (user !== null) {
            const { pass, cpf, ...result } = user;
            const payload = { nome: user.name, sub: user.phone }
            return { user: { name: user.name, _id: result, token: this.jwtService.sign(payload) } };
          } else {
            return _response.status(403).json({code: 406, message: 'dados invalidos'});
          }
        } else {
          return _response.status(403).json({code: 406, message: 'dados invalidos'});
        }
      }).catch((e)=>{
        console.log('***ERRO ', e)
        return _response.status(e.status).json({code: e.status, message: e.text})
      })
      
    }

  }
  async resetPassword(_entrada: any) {
    const user = await this.usersService.findByEmail(_entrada.email);
    if (user !== null) {
      const payload = this.jwtService.verify(_entrada.token)
      const date = new Date();
      if (payload.exp > parseInt((date.getTime() / 1000).toFixed(0))) {
        if (payload.sub === _entrada.email) {
          user.pass = _entrada.password;
          await this.usersService.updatePass(user);
          const { pass, cpf, ...result } = user;
          const payloadToken = { nome: user.name, sub: user.cpf };
          return { user: { name: user.name, _id: user.cpf, token: this.jwtService.sign(payloadToken) } }
        } else {
          return 'Token Invalido'
        }
      } else {
        return 'Token Expirado'
      }
    } else {
      return {code: 406, message: 'email não cadastrado'};
    }

  }
  async forgotPassword(_entrada: any) {
    const user = await this.usersService.findByEmail(_entrada.email);
    if (user !== null) {
      const { pass, cpf, ...result } = user;
      const payload = { nome: result.phone, sub: user.email };
      const mail = MailMessage.init()
        .greeting(`Olá ${user.name}`)
        .line('Este é um email automático, para recuperação de senha!')
        .action('Recuperar Senha', `http://localhost:4200/forgot-password/${this.jwtService.sign(payload)}`)
        .line('Caso você não tenha solicitado a recuperação da sua senha, por favor desconsidere essa mensagem.')
        .subject('Recuperação de Senha');

      Mailman.init()
        .to(user.email) // OR .to(['id1@email.com', 'id2@email.com'])
        .send(mail);

      return true;
    } else {
      return 'e-mail não cadastrado';
    }

  }
}
