import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Child } from '../models/child.model';
import { CreateChildDto } from '../models/create-child.dto'; 

@Injectable({
  providedIn: 'root',
})
export class ChildService {
  private apiUrl = 'http://localhost:3000/api/children';

  constructor(private http: HttpClient) {}

  
  createChild(createChildDto: CreateChildDto): Observable<Child> {
    return this.http.post<Child>(this.apiUrl, createChildDto);
  }

  
  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(this.apiUrl); 
  }

  
  getSummaryByMunicipality(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/summary`);
  }
}
