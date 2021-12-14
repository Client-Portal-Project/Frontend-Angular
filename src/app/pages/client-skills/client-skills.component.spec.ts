import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSkillsComponent } from './client-skills.component';

describe('ClientSkillsComponent', () => {
  let component: ClientSkillsComponent;
  let fixture: ComponentFixture<ClientSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
