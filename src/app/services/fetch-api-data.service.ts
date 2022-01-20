import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


const apiUrl = ''
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
  // this will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) { 
  }

  // Making the api call for the user registration endpoint
  public userRegistration(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(
      // apiUrl + 
      'users', userData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened');
  }
}
