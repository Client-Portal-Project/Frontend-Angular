import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-client-skills',
  templateUrl: './client-skills.component.html',
  styleUrls: ['./client-skills.component.css']
})
export class ClientSkillsComponent {

  skillsForm = this.fb.group({
    field: [''],
    techStack: this.fb.group({
      languages: [''],
      services: [''],
    }),
    experience: this.fb.group({
      years: [''],
      position: ['']
    }),
    skills: this.fb.array([
      this.fb.control('')
    ])
  });


  get skills() { 
    return this.skillsForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  showInfo(){
    console.log(this.skillsForm.value);
  }

  constructor(
    private fb: FormBuilder
  ) { }
}
