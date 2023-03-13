import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-services',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }}. {{ employee.name }} - {{ employee.age }}</li>
    </ul>
  `,
  styles: [``],
})
export class ServicesComponent {
  constructor(private _employeeService: EmployeeService) {
    this.employees = this._employeeService.getEmployees();
  }

  public employees: {
    id: number;
    name: string;
    age: number;
  }[] = [];
}
