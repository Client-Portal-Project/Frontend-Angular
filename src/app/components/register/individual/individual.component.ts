import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplicantService } from 'src/app/services/applicant.service';
import { Applicant } from '../../../classes/applicant';
@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent {


  model = new Applicant('', '', '', '', '', '', '', '');

  constructor(private userService: UserService) { }
  

  onSubmit(): void {

  }

}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-individual',
//   template: `
//     <input [(ngModel)]="name" #it="ngModel" required>
//     <p>Value: {{ name }}</p>
//     <p>Valid: {{ it.valid }}</p>
//     <button (click)="setValue()">Set value</button>
//   `,
//   styleUrls: ['./individual.component.css']
// })

// export class AppComponent {
//   name = '';
//   setValue() { this.name = 'Millie Bobby Brown'; }
// }