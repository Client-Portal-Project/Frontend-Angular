import { AuthService } from '@auth0/auth0-angular';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth0login',
  templateUrl: './auth0login.component.html',
  styleUrls: ['./auth0login.component.css']
})
export class Auth0LoginComponent implements OnInit {

  constructor(public auth0:AuthService, 
    @Inject(DOCUMENT) public document:Document,
    public router:Router) {}

  ngOnInit(): void {
    //this is intentional
  }
  
  auth0login()
  { 
    this.auth0.loginWithRedirect();
  }
}
