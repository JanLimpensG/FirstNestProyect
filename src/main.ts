import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Ignora los atribuos que no están en el DTO
      forbidNonWhitelisted: true, //Manda error en caso de mandar atriburos que no están en el DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
