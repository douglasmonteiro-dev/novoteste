import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
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
    register(req: any, res: any): Promise<any>;
    forgot_password(req: any): Promise<true | "e-mail não cadastrado">;
    reset_password(req: any): Promise<"Token Invalido" | "Token Expirado" | {
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
}
