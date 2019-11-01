import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateScheduleComponent } from './modal-create-schedule.component';

describe('ModalCreateScheduleComponent', () => {
  let component: ModalCreateScheduleComponent;
  let fixture: ComponentFixture<ModalCreateScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
