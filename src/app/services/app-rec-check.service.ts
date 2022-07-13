import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class AppRecCheckService {

  constructor(public user: UserService, public utiliService: UtilService, public router: Router) { }
  public userCheck() { }
}
