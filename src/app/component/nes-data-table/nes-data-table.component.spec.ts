import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NesDataTableComponent } from './nes-data-table.component';

describe('NesDataTableComponent', () => {
  let component: NesDataTableComponent;
  let fixture: ComponentFixture<NesDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NesDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NesDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
