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

  potentials: any[] = this.matches.slice();
  collapsed = false;

  constructor() { }

  ngOnInit(): void {
  }
  // mouse held down move  and rotate the image. looks janky right now
  onMouseDown(event: MouseEvent, imagename: string) {
    var image = document.getElementById(imagename);
    image!.style.transition = "none";
    const x = event.clientX - image!.offsetLeft;
    const y = event.clientY - image!.offsetTop;
    console.log(x, y);

    const mouseMoveListener = (event: MouseEvent) => {
      image!.style.left = event.clientX - x + 'px';
      image!.style.top = event.clientY - y + 'px';
      image!.style.transform = 'rotate(' + (x - event.clientX) / 10 + 'deg)';
    };
    const mouseUpListener = (event: MouseEvent) => {
      var image_x = image!.getBoundingClientRect().left + image!.getBoundingClientRect().width / 2;
      var half_parent = image!.parentElement!.getBoundingClientRect().left + image!.parentElement!.getBoundingClientRect().width / 2;

      if(image_x! > half_parent!+70){
        this.potentials.splice(this.potentials.indexOf(imagename), 1);
      }
      if(image_x! < half_parent!-70){
        this.potentials.splice(this.potentials.indexOf(imagename), 1);
      }

      document.removeEventListener('pointermove', mouseMoveListener);
      document.removeEventListener('pointerup', mouseUpListener);
      document.removeEventListener('pointercancel', mouseUpListener);
    }
    document.addEventListener('pointermove', mouseMoveListener);
    document.addEventListener('pointerup', mouseUpListener);
    document.addEventListener('pointercancel', mouseUpListener);
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
