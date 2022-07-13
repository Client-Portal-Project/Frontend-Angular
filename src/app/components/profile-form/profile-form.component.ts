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
      this.router.navigate(['/clientproject/profile-form']);
    else {
      let sessUser:
        User = new User(
          this.registerForm.get('email')!.value,
          this.registerForm.get('password')!.value,
          //this.registerForm.get('pwTest')!.value,
          this.registerForm.get('firstName')?.value,
          this.registerForm.get('lastName')?.value,
          
        );

      console.log (sessUser);
      let userT = sessUser;//JSON.stringify(sessUser);
      console.log("The JSON String is: "+userT);

      this._userService.createUser(userT).subscribe(
        response => {
          this.router.navigate(['/register']);//  when sucesfulll change uri to register comp.
          console.log("Great success.");
        },
        error => {
          this.router.navigate(['/profile']);
          console.warn("An error has occurred");
        }
      )
    }
  }
}