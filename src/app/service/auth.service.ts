import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000/user';

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('User Not Found.'));
  }

  GetByID(id: any) {
    return this.http
      .get(this.apiUrl + '/' + id)
      .pipe(catchError(this.handleError));
  }

  isLoggedId() {
    return sessionStorage.getItem('username') != null;
  }
}
