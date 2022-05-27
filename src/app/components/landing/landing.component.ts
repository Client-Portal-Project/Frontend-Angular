import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from 'src/app/classes/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {

  _firstName: string = '';
  _lastName: string = '';
  _email: string = '';
  _password: string = '';
  _confirmPassword: string = '';
  _isCredentialsCorrect: boolean = false;
  _isCredentialsIncorrect: boolean = false;
  _isEmpty: boolean = false;
  registerForm!: FormGroup;

  constructor( private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName : new FormControl('', Validators.required), 
      lastName : new FormControl('',Validators.required),
      password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      confirmPassword : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),  
      email : new FormControl('', [Validators.required, Validators.email])
    })
  }
  
  register() {
    console.log(this.registerForm.value);
  }
}
