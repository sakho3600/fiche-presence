import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulScoreComponent } from './regul-score.component';

describe('RegulScoreComponent', () => {
  let component: RegulScoreComponent;
  let fixture: ComponentFixture<RegulScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
