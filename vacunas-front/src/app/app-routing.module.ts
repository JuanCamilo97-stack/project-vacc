import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildFormComponent } from './child-form/child-form.component';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';
import { ApplyVaccineComponent } from './apply-vaccine/apply-vaccine.component';

const routes: Routes = [
  { path: 'child-form', component: ChildFormComponent },
  { path: 'vaccine-list', component: VaccineListComponent },
  { path: 'apply-vaccine', component: ApplyVaccineComponent },
  { path: '', redirectTo: '/child-form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }