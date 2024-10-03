import { Component, OnInit } from '@angular/core';
import { VaccinesService } from '../services/vaccines.service';
import { Vaccine } from '../models/vaccine.model'; 
import { CreateVaccineDto } from '../models/create-vaccine.dto'; 

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
})
export class VaccineListComponent implements OnInit {
  vaccines: Vaccine[] = [];
  newVaccine: CreateVaccineDto = {
    name: '',
    maxAge: null, 
  };

  constructor(private vaccinesService: VaccinesService) {}

  ngOnInit(): void {
    this.loadVaccines();
  }

  loadVaccines() {
    this.vaccinesService.getVaccines().subscribe((data: Vaccine[]) => {
      this.vaccines = data;
    });
  }

  createVaccine() {
    if (!this.newVaccine.name || this.newVaccine.maxAge === null || this.newVaccine.maxAge <= 0) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    this.vaccinesService.createVaccine(this.newVaccine).subscribe((vaccine) => {
      this.vaccines.push(vaccine);
      this.newVaccine = { name: '', maxAge: null }; 
    });
  }

  deleteVaccine(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta vacuna?')) {
      this.vaccinesService.deleteVaccine(id).subscribe(() => {
        this.vaccines = this.vaccines.filter(vaccine => vaccine.id !== id);
      });
    }
  }
}
