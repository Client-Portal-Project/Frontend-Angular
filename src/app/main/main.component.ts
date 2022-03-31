import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // list of images, replace with any model with a model.image property
  matches: any[] =
  ["https://www.w3schools.com/howto/img_forest.jpg",
  "https://www.w3schools.com/howto/img_snow.jpg",
  "https://www.w3schools.com/howto/img_mountains.jpg",
  "https://www.w3schools.com/howto/img_lights.jpg"];

  potentials: any[] = this.matches;
  collapsed = false;

  constructor() { }

  ngOnInit(): void {
  }
  // mouse held down move  and rotate the image. looks janky right now
  onMouseDown(event: MouseEvent, imagename: string){
    var image = document.getElementById(imagename);
    image!.style.display = 'block';
    image!.style.position = 'absolute';
    const x = event.clientX - image!.offsetLeft;
    const y = event.clientY - image!.offsetTop;

    const mouseMoveListener = (event: MouseEvent) => {
      image!.style.left = event.clientX - x + 'px';
      image!.style.top = event.clientY - y + 'px';
      image!.style.transform = 'rotate(' + (x - event.clientX) / 10 + 'deg)';
    };
    const mouseUpListener = () => {
      document.removeEventListener('mousemove', mouseMoveListener);
      document.removeEventListener('mouseup', mouseUpListener);
    }
    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);
  }

  // add "collapsed" class to the left bar elements
  collapse(){
    this.collapsed = !this.collapsed;
    var elements = document.getElementsByName("collapsable");
    if(this.collapsed){
      for(var i = 0; i < elements.length; i++){
        elements[i].classList.add("collapsed");
      }
    }else{
      for(var i = 0; i < elements.length; i++){
        elements[i].classList.remove("collapsed");
      }
    }
  }

}
