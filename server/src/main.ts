import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';
import {readFileSync} from 'fs'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const isProd = process.env.NODE_ENV === 'production';

  const cors: CorsOptions = {
    origin: process.env.DOMAIN,
  };
  const httpsOptions =  isProd ? {
    key: readFileSync(__dirname + `\\${process.env.SERVER_HOST}\\privkey.pem`),
    cert: readFileSync(__dirname + `\\${process.env.SERVER_HOST}\\cert.pem`)
  } : undefined;

  const app = await NestFactory.create(AppModule, {cors: cors, httpsOptions: httpsOptions});

  

  const options = new DocumentBuilder()
    .setTitle('API Casa de Sistemas')
    .setDescription('Nossos endpoints para integração')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
