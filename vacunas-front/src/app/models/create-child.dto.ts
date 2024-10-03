export interface CreateChildDto {
    name: string;
    age: number | null; 
    identificationNumber: string;
    gender: string;
    birthDate: Date | null; 
    municipalityId: number | null; 
  }