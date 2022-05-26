import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
  loggedIn: boolean;

  constructor(private service: UserService) {
    if(sessionStorage.getItem('user')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    // this.auth0.user$.subscribe(user => {
    //   this.service.createUser(new User(
    //     user?.email,
    //     user?.email_verified,
    //     user?.family_name,
    //     user?.given_name,
    //     user?.name,
    //     user?.nickname,
    //     user?.picture,
    //     user?.phone_number,
    //     user?.phone_number_verified,
    //     user?.birthdate)).subscribe()}, err => {console.log("error")}, () => {console.log("other")});

        // if(user){
        //   usr = new User(user.email!, user.family_name!, user.given_name!, user.name!, user.nickname!, user.picture!, user.sub!, user.updated_at!);
        //   console.log(user.email, user.family_name, user.given_name, user.name, user.nickname, user.picture, user.sub, user.updated_at);
          // this.service.editUser(user).subscribe(
          //   (data: User) => {
          //     console.log(data);
          //   }
          // );
}}
