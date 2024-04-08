import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyClientDetailsComponent } from './agency-client-details.component';

describe('AgencyClientDetailsComponent', () => {
  let component: AgencyClientDetailsComponent;
  let fixture: ComponentFixture<AgencyClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyClientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
