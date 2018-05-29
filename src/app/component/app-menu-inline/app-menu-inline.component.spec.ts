import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuInlineComponent } from './app-menu-inline.component';

describe('AppMenuInlineComponent', () => {
  let component: AppMenuInlineComponent;
  let fixture: ComponentFixture<AppMenuInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMenuInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
