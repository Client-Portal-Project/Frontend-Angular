import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ObservedValueOf } from 'rxjs';
import { User } from 'src/app/classes/user';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private util: UtilService, private router: Router) {}
  endpoint = "/clientportal/user/"

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.util.api("/clientportal/user/login"), {
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
    return this.httpClient.get<User>(this.util.api(this.endpoint)+"by/"+email);
  }
  createUser(user: Object): Observable<User> {
    return this.httpClient.post<User>(this.util.api(this.endpoint), user);
  }

  editUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.util.api(this.endpoint), user, {'headers': this.util.headers});
  }
  getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(this.util.api(this.endpoint)+userId, {'headers': this.util.headers});
  }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.util.api(this.endpoint), {'headers': this.util.headers});
  }
  deleteUser(userId: number): Observable<User> {
    return this.httpClient.delete<User>(this.util.api(this.endpoint)+userId, {'headers': this.util.headers});
  }
}
