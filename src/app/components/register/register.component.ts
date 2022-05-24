import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  clicked: number = 0;

  rightClick() {
    if (this.clicked === 2) {
      this.clicked = 0;
      document.querySelector('.left')?.classList.remove('clicked');
      document.querySelector('.right')?.classList.remove('clicked');
    }
    else {
      this.clicked = 2;
      document.querySelector('.right')?.classList.add('clicked');
      document.querySelector('.left')?.classList.remove('clicked');
    }
  }
  leftClick() {
    if (this.clicked === 1) {
      this.clicked = 0;
      document.querySelector('.left')?.classList.remove('clicked');
      document.querySelector('.right')?.classList.remove('clicked');
    }
    else {
      this.clicked = 1;
      document.querySelector('.left')?.classList.add('clicked');
      document.querySelector('.right')?.classList.remove('clicked');
    }
  }
}
