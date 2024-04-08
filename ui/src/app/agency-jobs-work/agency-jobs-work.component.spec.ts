import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyJobsWorkComponent } from './agency-jobs-work.component';

describe('AgencyJobsWorkComponent', () => {
  let component: AgencyJobsWorkComponent;
  let fixture: ComponentFixture<AgencyJobsWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyJobsWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyJobsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
