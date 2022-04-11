import { Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/services/applicant.service';
import { Applicant } from '../../../classes/applicant';

@Component({
  selector: 'app-individual',
  templateUrl:'./individual.component.html',
  styleUrls: ['./individual.component.css'],
})
export class IndividualComponent implements OnInit{


  employmentStatuses = ['Employed','Unemployed','Self-Employed','Retired','Student','Other']
  educationLevels = ['High School','Associate Degree','Bachelor Degree','Master Degree','PhD','Other']
  educationFields = ['Computer Science','Mathematics','Physics','Chemistry','Biology','Other']
  submitted = false;
  model: Applicant = new Applicant();

  constructor(private applicantService: ApplicantService) { }
  ngOnInit() {}
  onSubmit(): void {
    this.submitted = true;
    this.applicantService.createApplicant(this.model);
  }
}
