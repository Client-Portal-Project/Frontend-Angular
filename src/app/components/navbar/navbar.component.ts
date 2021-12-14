import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  _user: any = {};

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this._user = sessionStorage.getItem('user');
  }

  logout(): void {
    this.userservice.logout();
    this._user = null;
  }
}
