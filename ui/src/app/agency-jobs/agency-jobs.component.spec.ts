import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyJobsComponent } from './agency-jobs.component';

describe('AgencyJobsComponent', () => {
  let component: AgencyJobsComponent;
  let fixture: ComponentFixture<AgencyJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
