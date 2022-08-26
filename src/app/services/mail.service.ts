import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  constructor(private httpclient: HttpClient, private util: UtilService) { }
endpoint = "/clientportal/mail/"

resetPassword(user: User): Observable<User>{
  return this.httpclient.post<User>(this.util.api(this.endpoint), user);
}
}
