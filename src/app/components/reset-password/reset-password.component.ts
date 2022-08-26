import { UtilService } from './../../services/util.service';
import { User } from './../../classes/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private utilService: UtilService) { 
    
  } 
  email = this.activatedRoute.snapshot.paramMap.get("email")?.valueOf();
  tempUser: User = new User("", "");

  ngOnInit(): void { 
    this.userService.verifyUser(this.email).subscribe(
      response => {
        this.tempUser = response;
      }, 
      error => {
        console.warn("no email in database");
      }
    );
      this.userService.login(this.tempUser.email.valueOf(), this.tempUser.password.valueOf()).subscribe(
        response => {
          this.utilService.storeSession(response.body.userId, 
            response.headers.get("authorization"));
        }
      )
  }

}
