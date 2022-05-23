import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  // private _serverDomain: string = "http://localhost:8080/clientportal/";

  jwt: any = sessionStorage.getItem('JWT');
  headers = new HttpHeaders().set('content-type', 'application/json').set('authorization', this.jwt);

  public api(endpoint:string) {
    return environment.apiUrl + endpoint;
  }

  public setHeaders(): void {
    this.jwt = sessionStorage.getItem('JWT');
    this.headers = new HttpHeaders().set('content-type', 'application/json').set('authorization', this.jwt);
  }

  storeSession(userId: number, token: string): void {
    sessionStorage.setItem('JWT', token);
    sessionStorage.setItem('user', JSON.stringify(userId));
    this.setHeaders();
  }
}
