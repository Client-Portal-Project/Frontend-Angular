import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { fromEventPattern } from 'rxjs';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl,
    password: new FormControl,
    pwTest: new FormControl,
    firstName: new FormControl,
    lastName: new FormControl,

  });
  constructor(private _userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }
  registerUser(registerForm: FormGroup) {
    if (this.registerForm.get('password')?.value != this.registerForm.get('pwTest')?.value || this.registerForm.get('password')?.value == null)
      this.router.navigate(['/profile-form']);
    else {
      let sessUser:
        User = new User(
          this.registerForm.get('email')!.value,
          this.registerForm.get('password')!.value,
          this.registerForm.get('pwTest')?.value,
          this.registerForm.get('firstName')?.value,
          this.registerForm.get('lastName')?.value
        );

      let userT = JSON.stringify(sessUser);
      this._userService.createUser(userT).subscribe(
        response => {
          console.log("Great success.");
        },
        error => {
          console.warn("An error has occurred");
        }
      )
    }
  }
}