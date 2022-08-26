import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { MailService } from 'src/app/services/mail.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private userService: UserService, private mailService: MailService, private router: Router) { }
  emailGroup = new FormGroup({
    email: new FormControl
  });

  userHolder: User = new User(" ", " ");

  ngOnInit(): void {
  }

  emailUser() {
    this.userService.verifyUser(this.emailGroup.get('email')!.valueOf().toString()).subscribe(
      response => {
        this.userHolder = response;
      },
      error => {
        console.log("User not found");
        this.router.navigate(['forgot-password']);
      }
    );

    this.mailService.resetPassword(this.userHolder).subscribe(
      response => {
        console.log("Successfully sent email");
      },
      error => {
        console.log("could not send email");
      }
    );
  }

}
