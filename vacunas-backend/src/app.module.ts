import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ChildrenModule } from './children/children.module';
import { MunicipalityModule } from './municipalities/municipality.module';
import { VaccinesModule } from './vaccines/vaccines.module';
import { DepartmentModule } from './municipalities/department/department.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true, 
      synchronize: true,
      ssl: {
        rejectUnauthorized: false, 
      },
      extra: {
        sslmode: 'require', 
      },      
    }),
    ChildrenModule,
    MunicipalityModule,
    DepartmentModule,
    VaccinesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}