import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDasboradComponent } from './employee-dasborad.component';

describe('EmployeeDasboradComponent', () => {
  let component: EmployeeDasboradComponent;
  let fixture: ComponentFixture<EmployeeDasboradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDasboradComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDasboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
