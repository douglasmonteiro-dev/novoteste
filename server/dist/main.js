"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const document_builder_1 = require("@nestjs/swagger/dist/document-builder");
const swagger_module_1 = require("@nestjs/swagger/dist/swagger-module");
const app_module_1 = require("./app.module");
const fs_1 = require("fs");
async function bootstrap() {
    const isProd = process.env.NODE_ENV === 'production';
    const cors = {
        origin: process.env.DOMAIN,
    };
    const httpsOptions = isProd ? {
        key: (0, fs_1.readFileSync)(__dirname + `\\${process.env.SERVER_HOST}\\privkey.pem`),
        cert: (0, fs_1.readFileSync)(__dirname + `\\${process.env.SERVER_HOST}\\cert.pem`)
    } : undefined;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: cors, httpsOptions: httpsOptions });
    const options = new document_builder_1.DocumentBuilder()
        .setTitle('API Casa de Sistemas')
        .setDescription('Nossos endpoints para integração')
        .setVersion('1.0')
        .build();
    const document = swagger_module_1.SwaggerModule.createDocument(app, options);
    swagger_module_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map