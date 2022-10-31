import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { MailService } from 'src/app/services/mail.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-find-username',
  templateUrl: './find-username.component.html',
  styleUrls: ['./find-username.component.css']
})
export class FindUsernameComponent implements OnInit {

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
        console.log("Username not found");
        this.router.navigate(['find-username']);
      }
    );

    this.mailService.findUsername(this.userHolder).subscribe(
      response => {
        console.log("Successfully sent email");
      },
      error => {
        console.log("could not send email");
      }
    );
  }

}
