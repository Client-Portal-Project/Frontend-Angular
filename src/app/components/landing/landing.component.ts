import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';
import { Auth0Client } from '@auth0/auth0-spa-js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
  
  constructor(public auth0: AuthService, public service: UserService) { 
    this.auth0.user$.subscribe(user => { console.log(user);}, err => {}, () => {});
        // if(user){
        //   usr = new User(user.email!, user.family_name!, user.given_name!, user.name!, user.nickname!, user.picture!, user.sub!, user.updated_at!);
        //   console.log(user.email, user.family_name, user.given_name, user.name, user.nickname, user.picture, user.sub, user.updated_at);
          // this.service.editUser(user).subscribe(
          //   (data: User) => {
          //     console.log(data);
          //   }
          // );
}}
