import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  const config = new DocumentBuilder()
    .setTitle('TODO API')
    .setVersion('1.0.1')
    .build();
  const document = SwaggerModule.createDocument();
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
