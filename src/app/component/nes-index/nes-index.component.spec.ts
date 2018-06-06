import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NesIndexComponent } from './nes-index.component';

describe('NesIndexComponent', () => {
  let component: NesIndexComponent;
  let fixture: ComponentFixture<NesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
