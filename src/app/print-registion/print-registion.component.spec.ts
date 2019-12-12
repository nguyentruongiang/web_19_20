import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRegistionComponent } from './print-registion.component';

describe('PrintRegistionComponent', () => {
  let component: PrintRegistionComponent;
  let fixture: ComponentFixture<PrintRegistionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintRegistionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintRegistionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
