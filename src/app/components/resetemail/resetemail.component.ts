import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-resetemail',
  templateUrl: './resetemail.component.html',
  styleUrls: ['./resetemail.component.css']
})
/*
  As a user I want to be able to reset my email if I forget it.
  This'll be implemented fully in a later iteration of this project where we would email the person at their email to reset their email to a new email.  
*/
export class ResetemailComponent implements OnInit {
  @Input() userData = { Firstname: '', Lastname: '', Email: '', Password: '' };
  _isEmpty: boolean = false;
  _emailisEmpty: boolean = false;
  _passwordisEmpty: boolean = false;
  _firstisEmpty: boolean = false;
  _lastisEmpty: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  /*
    This is what will be called by the form submittion in resetemail.component.html
    This needs to call something that sends an emai. To be determined
  */
  resetemail(): void {
    //implemenation notes:
    //Needs a way to make sure that the person is who they say that they are so that anyone can't just reset anyone else's account
    //Given an email, send an email to reset the email and password already in the DB.
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
    alert('Your email has been reset to ' + this.userData.Email)
  }
}
