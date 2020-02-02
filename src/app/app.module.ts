import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FilterempPipe } from './filteremp.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    UpdateComponent,
    HomeComponent,
    AddEmployeeComponent,
    FilterempPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }