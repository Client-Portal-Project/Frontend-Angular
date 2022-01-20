import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Input() userData = {Firstname: '', Lastname: '', Username: '', Email: '', Password: '' };

  registerUser(): void {
    console.log(this.userData);
  }

}
