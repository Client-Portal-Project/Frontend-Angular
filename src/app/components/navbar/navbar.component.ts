import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuBtn: any;
  menuShown: any;
  menuOpen = false;
  constructor(private userservice: UserService) { 

  }
  ngOnInit(): void {
    this.menuBtn = document.querySelector('.menu-btn');
    this.menuShown = document.querySelector('.collapse');
  }

  toggleMenu() {
    if(this.menuOpen) {
      this.menuBtn!.classList.remove('open');
      this.menuShown!.classList.remove('show');
    } else {
      this.menuBtn!.classList.add('open');
      this.menuShown!.classList.add('show');
    }
    this.menuOpen = !this.menuOpen;
  }

}
