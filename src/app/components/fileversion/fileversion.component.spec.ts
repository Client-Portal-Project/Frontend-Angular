import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileversionComponent } from './fileversion.component';

describe('FileversionComponent', () => {
  let component: FileversionComponent;
  let fixture: ComponentFixture<FileversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
