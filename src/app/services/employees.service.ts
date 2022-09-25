import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl : string = environment.baseApiurl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/employees');
  }

  addEmployee(addEmployee : Employee) : Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl + 'api/employees',addEmployee)
  }

  getEmployee(id:string) : Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + 'api/employees/' + id);
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee) : Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl + 'api/employees/' + id,updateEmployeeRequest);
  }

  deleteEmployee(id:string) : Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + 'api/employees/' + id);
  }
}
