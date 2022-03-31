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

  constructor() { }

  ngOnInit(): void {
  }

}
