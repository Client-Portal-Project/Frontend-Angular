import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetemail',
  templateUrl: './resetemail.component.html',
  styleUrls: ['./resetemail.component.css']
})
  /*
    As a user I want to be able to reset my email if I forget it.
    This'll be implemented fully in a later iteration of this project where we would email the person at their email to reset their email to a new email.  
  */
export class ResetemailComponent implements OnInit {
  @Input() userData = { Firstname: '', Lastname: '', Email: '', Password: '' };
  constructor() { }

  ngOnInit(): void {
  }
  /*
    This is what will be called by the form submittion in resetemail.component.html
    This needs to call something that sends an emai. To be determined
  */
  resetemail(): void {
    //implemenation notes:
    //Needs a way to make sure that the person is who they say that they are so that anyone can't just reset anyone else's account
    //Given an email, send an email to reset the email and password already in the DB. 
    console.log(this.userData)
  }
}
