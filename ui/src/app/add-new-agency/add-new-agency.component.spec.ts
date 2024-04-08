import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAgencyComponent } from './add-new-agency.component';

describe('AddNewAgencyComponent', () => {
  let component: AddNewAgencyComponent;
  let fixture: ComponentFixture<AddNewAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
