import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { UsersService } from 'src/users/users.service';
import { VenomService } from 'src/venom/venom.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private venomService;
    constructor(usersService: UsersService, jwtService: JwtService, venomService: VenomService);
    validateUser(cpf: string, pass: number): Promise<any>;
    login(_user: any): Promise<{
        user: {
            name: string;
            _id: string;
            token: string;
        };
        code?: undefined;
        message?: undefined;
    } | {
        code: number;
        message: string;
        user?: undefined;
    }>;
    register(_entrada: any, _response: any): Promise<any>;
    resetPassword(_entrada: any): Promise<"Token Invalido" | "Token Expirado" | {
        user: {
            name: string;
            _id: string;
            token: string;
        };
        code?: undefined;
        message?: undefined;
    } | {
        code: number;
        message: string;
        user?: undefined;
    }>;
    forgotPassword(_entrada: any): Promise<true | "e-mail não cadastrado">;
}
