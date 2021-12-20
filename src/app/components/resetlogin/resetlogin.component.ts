import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/service/fetch-api-data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-resetlogin',
  templateUrl: './resetlogin.component.html',
  styleUrls: ['./resetlogin.component.css']
})
/*
As a user, I want to be able to reset my login credentials, so that I can log in again if I forget my credentials.
Given:
User has an account made
User forgets username or password
When:
The user clicks a "forgot password" link/button
ThenL
The system will ask for the email associated with the account and send an email to the user with the steps to change the password 

*/
export class ResetloginComponent implements OnInit {
  _isEmpty: boolean = false;
  _emailisEmpty: boolean = false;
  _passwordisEmpty: boolean = false;
  _firstisEmpty: boolean = false;
  _lastisEmpty: boolean = false;
  user: any = {};
  @Input() userData = { Firstname: '', Lastname: '', Email: '', Password: '' };
  constructor(private userService: UserService, private router: Router) {
  }


  ngOnInit(): void {
  }
  //this is for resetting passwords, we can have a different component for resetting emails
  //Cases when they enter emails:
  //Either the email exists already in the database, in which case, potential popup that says "Email sent to X to reset password"
  //Or the email doesn't exist, in which case, we just say "We are sorry, we can't find your email"
  resetlogin(): void {
    //if email isn't empty
    if (this.userData.Firstname == "") {
      this._firstisEmpty = true;
    }
    else if (this.userData.Lastname == "") {
      this._lastisEmpty = true;
    }
    else if (this.userData.Password == "") {
      this._passwordisEmpty = true;
    }
    else if (this.userData.Email == "") {
      this._emailisEmpty = true;
    }
    else {
      this._isEmpty = false;
      this.userService.editUser(this.userData).subscribe((response: { Firstname: string; Lastname: string; Email: string; Password: string; }) => {
        this.userData = response;
      })
    }
    //implementation notes:
    //call backend to look up email sent through by form submittion
    //if it exists, great, send email
    //if it doesn't exist, tell user that it isn't a valid email in DB and that they need to enter another email
    alert('Successfully reset password for the account ' + this.userData.Email);
  }


}
