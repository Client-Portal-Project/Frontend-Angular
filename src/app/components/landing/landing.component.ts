import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  
  constructor(public auth0: AuthService) {
    this.auth0.user$.subscribe(user =>
      { 
        console.log(user);
        
        //Check if user.email is in database if not route to Signup
        
      });
  } 
}
