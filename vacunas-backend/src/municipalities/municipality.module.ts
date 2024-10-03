import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Municipality } from './municipality.entity';
import { Department } from './department/department.entity';
import { MunicipalitySeedService } from './municipality-seed/municipality-seed.service';
import { MunicipalityController } from './municipality.controller';
import { MunicipalityService } from './municipality.service';

@Module({
  imports: [TypeOrmModule.forFeature([Municipality, Department])],
  controllers: [MunicipalityController],
  providers: [MunicipalityService, MunicipalitySeedService],
  exports: [TypeOrmModule, MunicipalitySeedService, MunicipalityService],
})
export class MunicipalityModule {}