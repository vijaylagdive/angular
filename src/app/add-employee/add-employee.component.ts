import { Component, OnInit } from '@angular/core';
import{ FormBuilder, Validators, FormGroup} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup;
  submitted: Boolean = false;
  employee: Employee;
  designations = ['Engineer','Sr Engineer','Analyst','Lead Engineer']

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.addEmployeeForm = this.fb.group({
      empName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      gender: ['male',Validators.required],
      designation: ['',Validators.required],
      salary: ['',Validators.required],
    });
  }

  onSubmit(): void{
    this.submitted = true;
    if(this.addEmployeeForm.valid){
      let form = this.addEmployeeForm;
      let employees = this.employeeService.employees;
      this.employee = new Employee();
      this.employee.name = form.get('empName').value;
      this.employee.email = form.get('email').value;
      this.employee.gender = form.get('gender').value;
      this.employee.designation = form.get('designation').value; 
      this.employee.salary = form.get('salary').value; 
      this.employeeService.employees.unshift(this.employee);    
      this.router.navigate(['/employees']);
    }
  }

}
