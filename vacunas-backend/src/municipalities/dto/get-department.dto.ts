export class GetDepartmentDto {
    id: number;
    name: string;
    municipalities: {
      id: number;
      name: string;
    }[];
  }