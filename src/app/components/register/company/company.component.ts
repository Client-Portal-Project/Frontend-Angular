import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  @Input() userData = {Firstname: '', Lastname: '', Username: '', Company: '', Job_Title: '', Email: '', Password: '' };

  registerUser(): void {
    console.log(this.userData);
    alert("Registration complete!")
  }

}
