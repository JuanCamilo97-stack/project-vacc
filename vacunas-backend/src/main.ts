import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MunicipalitySeedService } from './municipalities/municipality-seed/municipality-seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const municipalitySeedService = app.get(MunicipalitySeedService);
  
  const isEmpty = await municipalitySeedService.isDatabaseEmpty();
  if (isEmpty) {
    console.log('Sembrando la base de datos...');
    await municipalitySeedService.seed();
    console.log('Base de datos sembrada exitosamente.');
  } else {
    console.log('La base de datos ya contiene datos.');
  }

  await app.listen(3000);
}
bootstrap();