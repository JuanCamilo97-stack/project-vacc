import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { VaccineService } from './vaccines.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { Vaccine } from './vaccine.entity';
import { Child } from '../children/child.entity';

@Controller('vaccines')
export class VaccineController {
  constructor(private readonly vaccineService: VaccineService) {}

  @Get()
  findAll(): Promise<Vaccine[]> {
    return this.vaccineService.findAll();
  }

  @Post()
  create(@Body() createVaccineDto: CreateVaccineDto): Promise<Vaccine> {
    return this.vaccineService.create(createVaccineDto);
  }

  @Post(':vaccineId/apply/:childId')
  applyVaccine(
    @Param('vaccineId') vaccineId: number,
    @Param('childId') childId: number,
  ): Promise<Child> {
    return this.vaccineService.applyVaccine(vaccineId, childId);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.vaccineService.delete(id);
  }
}