import { IsString, IsInt } from 'class-validator';

export class CreateVaccineDto {
  @IsString()
  name: string;

  @IsInt()
  maxAge: number;
}