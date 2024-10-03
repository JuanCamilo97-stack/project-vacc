import { Component } from '@angular/core';
import { ChildService } from './services/child.service'; // Asegúrate de que la ruta sea correcta


interface VaccinatedSummary {
  municipality: string;
  vaccinatedChildren: number;
  totalChildren: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showModal = false;
  vaccinatedChildren: VaccinatedSummary[] = []; 

  constructor(private childService: ChildService) {}


  openModal() {
    this.getSummary();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  getSummary() {
    this.childService.getSummaryByMunicipality().subscribe(
      (data: VaccinatedSummary[]) => {
        this.vaccinatedChildren = data.sort((a, b) => a.municipality.localeCompare(b.municipality));
      },
      (error) => {
        console.error('Error al cargar el resumen', error);
      }
    );
  }
}
