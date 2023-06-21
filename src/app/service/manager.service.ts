import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeDto } from '../models/EmployeDto.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  URL = 'http://localhost:3000/posts/'
  constructor(private http : HttpClient) { }

  getAllEmployee() {
    return this.http.get<EmployeDto[]>(this.URL);
  }
  postEmploye(payload : EmployeDto) {
    return this.http.post<EmployeDto>(this.URL , payload)
  }
  deleteEmployee(id : string) {
    return this.http.delete(this.URL + '/'+ id)
  }
  editEmploye() {
    
  }
}
