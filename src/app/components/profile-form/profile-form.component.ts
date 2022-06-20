import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  registerForm = new FormGroup({
    email:new FormControl(''),
    password: new FormControl(''),
    pwTest: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    
  });
  constructor() { }

  ngOnInit(): void {
  }
  registerUser(registerForm: FormGroup){
    if(this.registerForm.get('pass')?.value != this.registerForm.get('passTest')?.value || this.registerForm.get('pass')?.value == null)
    this.router.navigate(['/register']);
  else {
  let sessUser: User = new User(this.registerForm.get('email')?.value, this.registerForm.get('pass')?.value, this.registerForm.get('firstName')?.value,
  this.registerForm.get('lastName')?.value, this.registerForm.get('biography')?.value);
  let userT = JSON.stringify(sessUser); 
  this.userServ.registerUser(userT).subscribe(
    response => {
      console.log("Great success.");
    },
    error =>{
      console.warn("An error has occurred");
    }
  )}
}


  }


