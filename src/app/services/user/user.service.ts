import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) {}
  endpoint = "user/"

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/user/login`, {
      email: email,
      password: password
    }, {observe: "response"});
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }

  //create login method

  verifyUser(email: string | undefined): Observable<any> {
    return this.httpClient.get<User>(`${environment.apiUrl}/user/email`);
  }
  createUser(user: User): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/user/`, user, {'headers': environment.requestOptions.headers});
  }

  editUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${environment.apiUrl}/user/`, user);
  }
  getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/user/userId`, {'headers': environment.requestOptions.headers});
  }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiUrl}/user/`, {'headers': environment.requestOptions.headers});
  }
  deleteUser(userId: number): Observable<User> {
    return this.httpClient.delete<User>(`${environment.apiUrl}/user/userId`, {'headers': environment.requestOptions.headers});
  }
}
