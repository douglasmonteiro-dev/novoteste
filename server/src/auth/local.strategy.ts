import { Injectable, UnauthorizedException} from '@nestjs/common';
import { Strategy} from 'passport-local';
import { PassportStrategy} from '@nestjs/passport';
import { AuthService} from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy (Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'cpf',
            passwordField: 'pass'
        });
    }
    async validate(cpf: string, pass: number): Promise<any> {
        const user = await this.authService.validateUser(cpf, pass);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}