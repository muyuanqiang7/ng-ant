import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NesWorkflwoStepsComponent } from './nes-workflwo-steps.component';

describe('NesWorkflwoStepsComponent', () => {
  let component: NesWorkflwoStepsComponent;
  let fixture: ComponentFixture<NesWorkflwoStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NesWorkflwoStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NesWorkflwoStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
