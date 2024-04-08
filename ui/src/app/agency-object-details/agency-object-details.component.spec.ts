import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyObjectDetailsComponent } from './agency-object-details.component';

describe('AgencyObjectDetailsComponent', () => {
  let component: AgencyObjectDetailsComponent;
  let fixture: ComponentFixture<AgencyObjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyObjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyObjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
