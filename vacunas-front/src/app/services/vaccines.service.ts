import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaccine } from '../models/vaccine.model';
import { CreateVaccineDto } from '../models/create-vaccine.dto';

@Injectable({
  providedIn: 'root',
})
export class VaccinesService {
  private apiUrl = 'http://localhost:3000/api/vaccines'; 

  constructor(private http: HttpClient) {}

  getVaccines(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(this.apiUrl);
  }

  createVaccine(createVaccineDto: CreateVaccineDto): Observable<Vaccine> {
    return this.http.post<Vaccine>(this.apiUrl, createVaccineDto);
  }

  applyVaccine(vaccineId: number, childId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${vaccineId}/apply/${childId}`, {});
  }

  deleteVaccine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}