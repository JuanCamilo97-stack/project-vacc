import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department/department.entity';
import { GetDepartmentDto } from './dto/get-department.dto';

@Injectable()
export class MunicipalityService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  async getMunicipalitiesByDepartment(departmentId: number) {
    const department = await this.departmentRepository.findOne({
      where: { id: departmentId },
      relations: ['municipalities'],
    });
  
    if (!department) {
      throw new NotFoundException(`Department with ID ${departmentId} not found`);
    }
  
    return department.municipalities.map(municipality => ({
      id: municipality.id,
      name: municipality.name,
    }));
  }

  async getDepartmentsWithMunicipalities(): Promise<GetDepartmentDto[]> {
    const departments = await this.departmentRepository.find({
      relations: ['municipalities'],
    });

    return departments.map((department) => ({
      id: department.id,
      name: department.name,
      municipalities: department.municipalities.map((municipality) => ({
        id: municipality.id,
        name: municipality.name,
      })),
    }));
  }
}