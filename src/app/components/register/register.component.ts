import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  clicked: number = 0;

  rightClick(){this.clicked=2; document.querySelector('.right')?.classList.add('clicked'); document.querySelector('.left')?.classList.remove('clicked');}
    
  leftClick(){this.clicked = 1; document.querySelector('.left')?.classList.add('clicked'); document.querySelector('.right')?.classList.remove('clicked');}
}
