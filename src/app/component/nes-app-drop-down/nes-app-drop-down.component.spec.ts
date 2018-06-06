import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NesAppDropDownComponent } from './nes-app-drop-down.component';

describe('NesAppDropDownComponent', () => {
  let component: NesAppDropDownComponent;
  let fixture: ComponentFixture<NesAppDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NesAppDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NesAppDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
