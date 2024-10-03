import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildrenService } from './children.service';
import { ChildrenController } from './children.controller';
import { Child } from './child.entity';
import { Municipality } from '../municipalities/municipality.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Child, Municipality])],
  providers: [ChildrenService],
  controllers: [ChildrenController],
  exports: [TypeOrmModule],
})
export class ChildrenModule {}
