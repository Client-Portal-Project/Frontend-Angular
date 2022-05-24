import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOpen: boolean = false;
  loggedIn: boolean = false;
  constructor(private userservice: UserService) { 

  }
  ngOnInit(): void {
    // this.menuBtn = document.querySelector('.menu-btn');
    // this.menuShown = document.querySelector('.collapse');
    if(sessionStorage.getItem('JWT')) {
      this.loggedIn = true;
    }
  }

  toggleMenu() {
    // if(this.menuOpen) {
    //   this.menuBtn!.classList.remove('open');
    //   this.menuShown!.classList.remove('show');
    // } else {
    //   this.menuBtn!.classList.add('open');
    //   this.menuShown!.classList.add('show');
    // }
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.userservice.logout();
    this.loggedIn = false;
  }
}
