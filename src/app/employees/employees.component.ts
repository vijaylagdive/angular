import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Router }from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  searchText: string;

  constructor(private router: Router, private employeeService: EmployeeService)  { 
  }  
  ngOnInit() {
    this.employees = this.employeeService.employees;
  }

  delete(empIndex: number){
     console.log("delete");
      if(confirm("Are you sure to delete?")) {
        this.employees.splice(empIndex,1);
      }
  }
}
