import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NesHorizontalMenuComponent } from './nes-horizontal-menu.component';

describe('NesHorizontalMenuComponent', () => {
  let component: NesHorizontalMenuComponent;
  let fixture: ComponentFixture<NesHorizontalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NesHorizontalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NesHorizontalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
