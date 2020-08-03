import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBallComponent } from './display-ball.component';

describe('DisplayBallComponent', () => {
  let component: DisplayBallComponent;
  let fixture: ComponentFixture<DisplayBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
