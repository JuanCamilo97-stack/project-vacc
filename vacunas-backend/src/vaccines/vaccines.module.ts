import { Module } from '@nestjs/common';
import { VaccineService } from './vaccines.service'; 
import { VaccineController } from './vaccines.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vaccine } from './vaccine.entity'; 
import { ChildrenModule } from '../children/children.module'; 

@Module({
  imports: [TypeOrmModule.forFeature([Vaccine]),
  ChildrenModule], 
  providers: [VaccineService], 
  controllers: [VaccineController] 
})
export class VaccinesModule {}
