import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { ApplicantService } from 'src/app/services/applicant.service';
import { Applicant } from '../../../classes/applicant';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-individual',
  templateUrl:'./individual.component.html',
  styleUrls: ['./individual.component.css'],
  providers: [{
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    }],
})
export class IndividualComponent implements OnInit{


  employmentStatuses = ['Employed','Unemployed','Self-Employed','Retired','Student','Other']
  educationLevels = ['High School','Associate Degree','Bachelor Degree','Master Degree','PhD','Other']
  educationFields = ['Computer Science','Mathematics','Physics','Chemistry','Biology','Other']
  submitted = false;
  model: Applicant = new Applicant();


  constructor() {}
  ngOnInit() {}
  onSubmit(): void {
    this.submitted = true;
    console.log(this.model);
  }
}
