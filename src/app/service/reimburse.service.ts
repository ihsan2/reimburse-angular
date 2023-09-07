import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReimburseService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000/reimburse';

  GetAll() {
    return this.http.get(this.apiUrl);
  }

  GetbyId(id: any) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  GetList(name: any) {
    return this.http.get(
      `${this.apiUrl}?name_like=${name}`
    );
  }

  UpdateStatus(id: any, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  totalRows() {}
}
