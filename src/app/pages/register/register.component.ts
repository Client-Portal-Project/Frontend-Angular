import { Component, Input, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/service/fetch-api-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() userData = {Firstname: '', Lastname: '', Username: '', Email: '', Password: '' };

  constructor(
    // public fetchApiData: UserRegistrationService
    ) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    console.log(this.userData);
  }



}
