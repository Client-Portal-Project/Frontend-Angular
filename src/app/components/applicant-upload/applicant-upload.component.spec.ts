import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantUploadComponent } from './applicant-upload.component';

describe('ApplicantUploadComponent', () => {
  let component: ApplicantUploadComponent;
  let fixture: ComponentFixture<ApplicantUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
