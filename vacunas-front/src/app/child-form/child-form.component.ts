import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../services/departments.service';
import { VaccinesService } from '../services/vaccines.service';
import { CreateChildDto } from '../models/create-child.dto';
import { ChildService } from '../services/child.service';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
})
export class ChildFormComponent implements OnInit {
  departments: any[] = [];
  municipalities: any[] = [];
  
  selectedDepartment: any = null;
  newChild: CreateChildDto = {
    name: '',
    age: null,
    identificationNumber: '',
    gender: '',
    birthDate: null,
    municipalityId: null,
  };

  showModal: boolean = false;
  createdChild: any = null;

  constructor(
    private departmentsService: DepartmentsService,
    private vaccinesService: VaccinesService,
    private childService: ChildService
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentsService.getDepartments().subscribe(
      (data) => {
        this.departments = data;
        console.log('Departamentos cargados:', this.departments);
      },
      (error) => {
        console.error('Error al cargar departamentos:', error);
      }
    );
  }

  onDepartmentChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const departmentId = Number(target.value);
    
    if (departmentId) {
      this.loadMunicipalities(departmentId);
    } else {
      this.municipalities = [];
    }
  }

  loadMunicipalities(departmentId: number) {
    this.departmentsService.getMunicipalitiesByDepartment(departmentId).subscribe(
      (municipalities) => {
        this.municipalities = municipalities;
        console.log('Municipios cargados:', this.municipalities);
      },
      (error) => {
        console.error('Error al cargar municipios:', error);
      }
    );
  }

  createChild() {
    console.log('Datos del niño a crear:', this.newChild);
    this.childService.createChild(this.newChild).subscribe(
      (child) => {
        console.log('Niño creado:', child);
        this.createdChild = {
          ...child,
          departmentName: this.getDepartmentName(this.selectedDepartment),
          municipalityName: this.getMunicipalityName(child.municipalityId)
        };
        this.showModal = true;
        this.resetForm();
      },
      (error) => {
        console.error('Error al crear niño:', error);
      }
    );
  }

  resetForm() {
    this.newChild = {
      name: '',
      age: null,
      identificationNumber: '',
      gender: '',
      birthDate: null,
      municipalityId: null,
    };
    this.selectedDepartment = null;
  }

  getDepartmentName(departmentId: number): string {
    const department = this.departments.find(d => d.id === departmentId);
    return department ? department.name : '';
  }

  getMunicipalityName(municipalityId: number): string {
    const municipality = this.municipalities.find(m => m.id === municipalityId);
    return municipality ? municipality.name : '';
  }

  closeModal() {
    this.showModal = false;
    this.createdChild = null;
  }
}