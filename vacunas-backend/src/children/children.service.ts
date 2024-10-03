import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Child } from './child.entity';
import { CreateChildDto } from './dto/create-child.dto';
import { Municipality } from '../municipalities/municipality.entity';

@Injectable()
export class ChildrenService {
  constructor(
    @InjectRepository(Child)
    private childrenRepository: Repository<Child>,
    @InjectRepository(Municipality)
    private municipalityRepository: Repository<Municipality>,
  ) {}

  async getAllChildren(): Promise<Child[]> {
    return this.childrenRepository.find({
      relations: ['municipality', 'vaccines'],
    });
  }

  async create(createChildDto: CreateChildDto): Promise<Child> {
    const municipality = await this.municipalityRepository.findOne({
      where: { id: createChildDto.municipalityId },
    });
    if (!municipality) {
      throw new Error('Municipality not found');
    }

    const newChild = this.childrenRepository.create({
      ...createChildDto,
      municipality,
    });
    return this.childrenRepository.save(newChild);
  }

  async getSummaryByMunicipality() {
    return this.childrenRepository
      .createQueryBuilder('child')
      .leftJoinAndSelect('child.municipality', 'municipality')
      .leftJoinAndSelect('child.vaccines', 'vaccines')
      .select('municipality.name', 'municipality')
      .addSelect('COUNT(DISTINCT child.id)', 'totalChildren')
      .addSelect('COUNT(DISTINCT vaccines.id)', 'vaccinatedChildren')
      .groupBy('municipality.name')
      .getRawMany();
  }
}