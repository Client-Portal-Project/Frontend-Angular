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
  "https://www.w3schools.com/howto/img_lights.jpg",
  "https://www.w3schools.com/howto/img_mountains.jpg",
  "https://www.w3schools.com/howto/img_forest.jpg"];

  potentials: any[] = this.matches;
  collapsed = false;

  constructor() { }

  ngOnInit(): void {
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
