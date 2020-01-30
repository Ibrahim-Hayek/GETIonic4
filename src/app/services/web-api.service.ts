import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  base_path = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  getItem(id): Observable<any> {
   
    return this.http.get<any>(this.base_path + '/posts/' + id, this.httpOptions).pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getList(): Observable<any> {
    return this.http.get<any>(this.base_path + '/posts', this.httpOptions).pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}