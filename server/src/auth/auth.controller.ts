import { Controller, UseGuards, Request, Post, Res } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger/dist';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Auth')


@Controller()
export class AuthController { 
    constructor(
        private authService: AuthService
    ) {}
    
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: any) {
        return this.authService.login(req.body);
    }

    @Post('auth/register')
    async register(@Request() req: any, @Res() res: any) {
        return this.authService.register(req.body, res);
    }
    @Post('auth/forgot_password')
    @ApiBody({required:true, description:'"email":"string"'})
    async forgot_password(@Request() req: any) {
        const retorno = await this.authService.forgotPassword(req.body);
        return retorno;
    }
    @Post('auth/reset_password')
    async reset_password(@Request() req: any) {
        const retorno = await this.authService.resetPassword(req.body);
        return retorno;
    }
}