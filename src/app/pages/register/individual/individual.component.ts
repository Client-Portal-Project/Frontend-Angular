import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {

  user: any = {};
  
  @Input() userData = {Firstname: '', Lastname: '', Username: '', Email: '', Password: '', Field: '', Years: '', CurrentTitle: '' };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    console.log(this.userData);
    this.user.email = this.userData.Email;
    this.user.password = this.userData.Password;

    this.userService.editUser(this.user).subscribe(response => {
      if (response.success) {
        alert(response.message);
        this.router.navigateByUrl('/login');
      } else {
        // alert maybe changed to something else
        alert(response.message);
      }
    })
  }

  // For registration page
  editUser(): void {
    this.user.email = this.userData.Email;
    this.user.password = this.userData.Password;

    this.userService.editUser(this.user).subscribe(response => {
      if (response.success) {
        this.user = response.data;
        sessionStorage.setItem('user', JSON.stringify(this.user));
      } else {
        // alert maybe changed to something else
        alert(response.message);
      }
    })
  }

}
