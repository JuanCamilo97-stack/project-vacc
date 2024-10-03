import { Controller, Get } from '@nestjs/common';
import { DepartmentsService } from './department.service';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Get()
  getAllDepartments() {
    return this.departmentsService.findAll();
  }
}
