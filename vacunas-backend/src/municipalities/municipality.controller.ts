import { Controller, Get,Param } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { GetDepartmentDto } from './dto/get-department.dto';

@Controller('api/departments')
export class MunicipalityController {
  constructor(private readonly municipalityService: MunicipalityService) {}

  @Get(':departmentId/municipalities')
getMunicipalitiesByDepartment(@Param('departmentId') departmentId: number) {
  return this.municipalityService.getMunicipalitiesByDepartment(departmentId);
}

  @Get()
  getDepartments(): Promise<GetDepartmentDto[]> {
    return this.municipalityService.getDepartmentsWithMunicipalities();
  }
}