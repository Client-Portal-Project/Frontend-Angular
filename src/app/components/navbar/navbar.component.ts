import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOpen: boolean = false;
  loggedIn: boolean = false;
  constructor(private router:Router, private userservice: UserService) { 

  }
  ngOnInit(): void {
    // this.menuBtn = document.querySelector('.menu-btn');
    // this.menuShown = document.querySelector('.collapse');
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.loggedIn = this.userservice.isLoggedIn;
      }
    })
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
