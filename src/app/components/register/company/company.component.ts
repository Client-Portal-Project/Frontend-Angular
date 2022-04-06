import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = new FormGroup({
      companyName: new FormControl('', Validators.required),
      companyEmail: new FormControl('', Validators.required),
      companyPhone: new FormControl('', Validators.required),
      companyAddress: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  onFileSelected() {
    console.log("File selected");
  }
}
