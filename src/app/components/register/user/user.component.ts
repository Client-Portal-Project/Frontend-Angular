import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
