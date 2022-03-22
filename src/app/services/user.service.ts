import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private utilService: UtilService, private router: Router) {}

  verifyUser(email: string | undefined): Observable<any> {
    return this.httpClient.get<User>(`${this.utilService.getServerDomain()}/clientportal/api/user/${email}`);
  }
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.utilService.getServerDomain()}/clientportal/api/user`, user);
  }
  editUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.utilService.getServerDomain()}/clientportal/api/user`, user, {'headers': this.utilService.headers});
  }
  getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.utilService.getServerDomain()}/clientportal/api/user/${userId}`, {'headers': this.utilService.headers});
  }

  
  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.utilService.getServerDomain()}/clientportal/api/login`, {
      email: email,
      password: password
    }, {observe: "response"});
  }
  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }
}
