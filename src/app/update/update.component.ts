import { Component, OnInit } from '@angular/core';
import{ FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Employee } from '../model/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employeeForm: FormGroup;
  submitted: Boolean = false;
  employee: Employee;
  constructor(private fb: FormBuilder, private router: Router,private actRoute: ActivatedRoute, private employeeService: EmployeeService) { 
    let empId = this.actRoute.snapshot.params.id;
    this.employee = this.employeeService.employees[empId]; 
  } 

  ngOnInit() {
    this.employeeForm = this.fb.group({
      empName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      gender: ['',Validators.required],
      designation: ['',Validators.required],
      salary: ['',Validators.required],
    });

    this.employeeForm.setValue({
      empName: this.employee.name,
      email: this.employee.email,
      gender: this.employee.gender,
      designation: this.employee.designation,
      salary: this.employee.salary
   });
  }

 onSubmit(): void{
    this.submitted = true;
    if(this.employeeForm.valid){
      this.employee.name = this.employeeForm.get('empName').value; 
      this.employee.email = this.employeeForm.get('email').value;
      this.employee.gender = this.employeeForm.get('gender').value;
      this.employee.designation = this.employeeForm.get('designation').value; 
      this.employee.salary = this.employeeForm.get('salary').value; 
      this.router.navigate(['/employees']);
    }
  }
}
