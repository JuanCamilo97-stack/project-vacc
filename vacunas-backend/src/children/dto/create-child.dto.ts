import { IsString, IsInt, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateChildDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  identificationNumber: string; 

  @IsString()
  gender: string;  

  @IsDate()
  @Type(() => Date)
  birthDate: Date;

  @IsInt()
  municipalityId: number;  
}