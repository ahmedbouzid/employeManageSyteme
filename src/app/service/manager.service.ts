import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  URL = 'http://localhost:3000/posts'
  constructor(private http : HttpClient) { }

  getAllEmployee() {
    return this.http.get(this.URL);
  }
}
