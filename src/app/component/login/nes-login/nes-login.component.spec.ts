import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NesLoginComponent } from './nes-login.component';

describe('NesLoginComponent', () => {
  let component: NesLoginComponent;
  let fixture: ComponentFixture<NesLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NesLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
