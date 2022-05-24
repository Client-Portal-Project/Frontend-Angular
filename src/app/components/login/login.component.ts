import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  _email: string = '';
  _password: string = '';
  _isCredentialsCorrect: boolean = false;
  _isCredentialsIncorrect: boolean = false;
  _isEmpty: boolean = false;

  constructor(private utilService: UtilService, private userService: UserService, private router: Router) { }

  login(email: string, password: string) {
    // Email and passwords fields are entered
    if (email != "" && password != "") {
      this._isEmpty = false;
      this.userService.login(email, password).subscribe(response => {
        this.resetFields();
        // Successful login, token and userId will be stored in sessionStorage
        this.utilService.storeSession(response.body.userId, 
          response.headers.get("authorization"));
        this._isCredentialsCorrect = true;
        this._isCredentialsIncorrect = false; 
        
        if(response == null) {
          this._isCredentialsCorrect = false;
          this._isCredentialsIncorrect = true;
        }

        // With correct credentials, the page will "load" to the next page in one second
        if (this._isCredentialsCorrect) {
          this.userService.isLoggedIn = true;
          setTimeout(() => {
            this.router.navigateByUrl('');
          }, 1000);
        }

      })
      
      // Incorrect email or password
      this._isCredentialsCorrect = false;
      this._isCredentialsIncorrect = true;
      
    } 
    // Email or password fields are empty
    else {
      this._isCredentialsIncorrect = false;
      this._isEmpty = true;
    }
  }

  resetFields() {
    this._email = '';
    this._password = '';
  }
}