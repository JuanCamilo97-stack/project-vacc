import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vaccine } from './vaccine.entity';
import { Child } from '../children/child.entity';
import { CreateVaccineDto } from './dto/create-vaccine.dto';

@Injectable()
export class VaccineService {
  constructor(
    @InjectRepository(Vaccine)
    private readonly vaccineRepository: Repository<Vaccine>,
    @InjectRepository(Child)
    private readonly childRepository: Repository<Child>,
  ) {}

  async applyVaccine(vaccineId: number, childId: number): Promise<Child> {
    const vaccine = await this.vaccineRepository.findOne({ where: { id: vaccineId } });
    const child = await this.childRepository.findOne({ 
      where: { id: childId },
      relations: ['vaccines']
    });

    if (!vaccine) {
      throw new NotFoundException('Vaccine not found');
    }

    if (!child) {
      throw new NotFoundException('Child not found');
    }

    if (child.age > vaccine.maxAge) {
      throw new BadRequestException('Child exceeds the maximum age for this vaccine');
    }

    child.vaccines = [...(child.vaccines || []), vaccine];
    return this.childRepository.save(child);
  }

  async findAll(): Promise<Vaccine[]> {
    return this.vaccineRepository.find();
  }

  async create(createVaccineDto: CreateVaccineDto): Promise<Vaccine> {
    const vaccine = this.vaccineRepository.create(createVaccineDto);
    return this.vaccineRepository.save(vaccine);
  }

  async delete(id: number): Promise<void> {
    await this.vaccineRepository.delete(id);
  }
}