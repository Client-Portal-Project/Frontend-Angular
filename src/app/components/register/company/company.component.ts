import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  resume: File | undefined;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = new FormGroup({
      companyName: new FormControl('', Validators.required),
      companyEmail: new FormControl('', Validators.required)
    });
    this.resume = undefined;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
  }

  onFileSelected() {
    console.log("File selected");
    this.resume = this.resume;
  }
}
