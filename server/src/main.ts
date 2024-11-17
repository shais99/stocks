import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';
import {ValidationPipe} from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    const configService = app.get(ConfigService);
    const port = configService.get('PORT');

    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();

