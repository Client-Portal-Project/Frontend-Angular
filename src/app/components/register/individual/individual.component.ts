import { NgModule, Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/services/applicant.service';
import { Applicant } from '../../../classes/applicant';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-individual',
  templateUrl:'./individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit{


  employmentStatuses = ['Employed','Unemployed','Self-Employed','Retired','Student','Other']
  educationLevels = ['High School','Associate Degree','Bachelor Degree','Master Degree','PhD','Other']
  educationFields = ['Computer Science','Mathematics','Physics','Chemistry','Biology','Other']
  submitted = false;
  model: Applicant = new Applicant();
  firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = new FormGroup({
      resume: new FormControl('', Validators.required),
      companyPhone: new FormControl('', Validators.required),
      companyAddress: new FormControl('', Validators.required),
    });
  }
  ngOnInit() {}

  onSubmit(): void {
    this.submitted = true;
    console.log(this.model);
  }

  upload(event:Event){
   console.log(event)
  }
}
