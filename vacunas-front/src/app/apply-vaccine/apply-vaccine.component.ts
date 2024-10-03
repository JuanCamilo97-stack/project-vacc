import { Component, OnInit } from '@angular/core';
import { ChildService } from '../services/child.service';
import { VaccinesService } from '../services/vaccines.service';
import { Child } from '../models/child.model';
import { Vaccine } from '../models/vaccine.model';

@Component({
  selector: 'app-apply-vaccine',
  templateUrl: './apply-vaccine.component.html',
})
export class ApplyVaccineComponent implements OnInit {
  children: Child[] = [];
  vaccines: Vaccine[] = [];
  selectedChildId: number | null = null;
  selectedVaccineId: number | null = null;

  constructor(
    private childService: ChildService,
    private vaccinesService: VaccinesService
  ) {}

  ngOnInit(): void {
    this.loadChildren();
    this.loadVaccines();
  }

  loadChildren() {
    this.childService.getChildren().subscribe(
      (data: Child[]) => {
        this.children = data;
      },
      (error) => {
        console.error('Error loading children:', error);
      }
    );
  }

  loadVaccines() {
    this.vaccinesService.getVaccines().subscribe(
      (data: Vaccine[]) => {
        this.vaccines = data;
      },
      (error) => {
        console.error('Error loading vaccines:', error);
      }
    );
  }

  applyVaccine() {
    if (this.selectedChildId && this.selectedVaccineId) {
      this.vaccinesService.applyVaccine(this.selectedVaccineId, this.selectedChildId).subscribe(
        () => {
          alert('Vacuna aplicada con éxito.');
          this.selectedChildId = null;
          this.selectedVaccineId = null;
        },
        (error) => {
          console.error('Error applying vaccine:', error);
          alert('Error al aplicar la vacuna. Por favor, inténtalo de nuevo.');
        }
      );
    } else {
      alert('Por favor, selecciona un niño y una vacuna.');
    }
  }
}