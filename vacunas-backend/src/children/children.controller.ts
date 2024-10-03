import { Controller, Post, Body, Get } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { CreateChildDto } from './dto/create-child.dto';
import { Child } from './child.entity';

@Controller('api/children') 
export class ChildrenController {
  constructor(private readonly childrenService: ChildrenService) {}

  @Get()
  getAllChildren(): Promise<Child[]> {
    return this.childrenService.getAllChildren();
  }

  @Post()
  create(@Body() createChildDto: CreateChildDto): Promise<Child> {
    return this.childrenService.create(createChildDto);
  }

  @Get('summary-by-municipality')
  getSummaryByMunicipality() {
    return this.childrenService.getSummaryByMunicipality();
  }

  
}