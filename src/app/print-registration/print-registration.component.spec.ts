import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRegistrationComponent } from './print-registration.component';

describe('PrintRegistrationComponent', () => {
  let component: PrintRegistrationComponent;
  let fixture: ComponentFixture<PrintRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
