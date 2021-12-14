import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetloginComponent } from './resetlogin.component';

describe('ResetloginComponent', () => {
  let component: ResetloginComponent;
  let fixture: ComponentFixture<ResetloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
