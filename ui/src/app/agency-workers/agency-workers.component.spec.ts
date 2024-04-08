import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyWorkersComponent } from './agency-workers.component';

describe('AgencyWorkersComponent', () => {
  let component: AgencyWorkersComponent;
  let fixture: ComponentFixture<AgencyWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
