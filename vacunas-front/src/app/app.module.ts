import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';
import { ApplyVaccineComponent } from './apply-vaccine/apply-vaccine.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ChildFormComponent,
    VaccineListComponent,
    ApplyVaccineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}