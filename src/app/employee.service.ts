import { Injectable } from '@angular/core';
import { Employee } from './model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employees: Employee[] = [
    {
      name: "John",
      email: "andy@mail.com",
      gender: "female",
      designation: "Analyst",
      salary: "15000"
    },{
      name: "Mac Nice",
      email: "mic@mail.com",
      gender: "female",
      designation: "Lead",
      salary: "20000"
    },{
      name: "Steve Joe",
      email: "sill@mail.com",
      gender: "male",
      designation: "Manager",
      salary: "25000"
    },{
      name: "Henry Speak",
      email: "ks@mail.com",
      gender: "female",
      designation: "Admin",
      salary: "16000"
    },{
      name: "Kane Williamson",
      email: "nnp@mail.com",
      gender: "Male",
      designation: "Manager",
      salary: "22000"
    },{
      name: "Tim Southe",
      email: "john@mail.com",
      gender: "female",
      designation: "Manager",
      salary: "25000"
    },{
      name: "Tom Latham",
      email: "john@mail.com",
      gender: "female",
      designation: "Engineer",
      salary: "25000"
    },{
      name: "Ish Sodhi",
      email: "si@mail.com",
      gender: "Male",
      designation: "Staff",
      salary: "34000"
    },{
      name: "Martin Guptil",
      email: "martin@mail.com",
      gender: "Male",
      designation: "CCD",
      salary: "41000"
    },{
      name: "Ross Tayler",
      email: "kisst@mail.com",
      gender: "female",
      designation: "Developer",
      salary: "25000"
    }
  ];

}
