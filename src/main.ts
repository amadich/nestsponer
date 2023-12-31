import { ValidationError, ValidationPipe } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ValidationException,
  ValidationFilter,
} from './util/filter.validation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api");
  app.useGlobalFilters(new ValidationFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      exceptionFactory: (errors: ValidationError[]) => {
        const errMsg = {};
        errors.forEach((err) => {
          errMsg[err.property] = [...Object.values(err.constraints)];
        });
        return new ValidationException(errMsg);
      },
    }),
  );
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();
