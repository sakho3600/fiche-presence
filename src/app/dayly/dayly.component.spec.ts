import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaylyComponent } from './dayly.component';

describe('DaylyComponent', () => {
  let component: DaylyComponent;
  let fixture: ComponentFixture<DaylyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaylyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaylyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
