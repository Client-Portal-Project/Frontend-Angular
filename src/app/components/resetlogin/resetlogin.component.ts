import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resetlogin',
  templateUrl: './resetlogin.component.html',
  styleUrls: ['./resetlogin.component.css']
})

export class ResetloginComponent {

  @Input() userData = { Firstname: '', Lastname: '', Email: '', Password: '' };

  //this is for resetting passwords, we can have a different component for resetting emails
  //Cases when they enter emails:
  //Either the email exists already in the database, in which case, potential popup that says "Email sent to X to reset password"
  //Or the email doesn't exist, in which case, we just say "We are sorry, we can't find your email"
  resetlogin(): void {
    //implementation notes:
    //call backend to look up email sent through by form submittion
    //if it exists, great, send email
    //if it doesn't exist, tell user that it isn't a valid email in DB and that they need to enter another email
    console.log(this.userData)
  }


}
