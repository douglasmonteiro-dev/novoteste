import { Module } from '@nestjs/common';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy'
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { jwtConstants } from './constants';
import { MailmanModule } from '@squareboat/nest-mailman';
import { VenomService } from 'src/venom/venom.service';

@Module({
  imports: 
    [
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '3h'}
      }),
      MailmanModule.register({
        host: 'smtp.terra.com.br',
        port: 587,
        username: 'monteiro_douglas',
        password: 'Adm1n747576',
        from: 'monteiro_douglas@terra.com.br',
        path: './mails',
      }),
      PassportModule, 
      UsersModule
    ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, VenomService]
})
export class AuthModule {}
