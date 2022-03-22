import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../classes/user';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent {


  model = new User('', '', '');

  constructor(private userService: UserService) { }
  

  onSubmit(): void {
    this.userService.editUser(this.model).subscribe(
      data => {
        console.log(data);
      }
    );
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