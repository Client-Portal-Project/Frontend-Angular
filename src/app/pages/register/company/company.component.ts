import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input() userData = {Firstname: '', Lastname: '', Username: '', Company: '', Job_Title: '', Email: '', Password: '' };

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(): void {
    console.log(this.userData);
    alert("Registration complete!")
  }

}
