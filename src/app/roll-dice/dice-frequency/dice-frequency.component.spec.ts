import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceFrequencyComponent } from './dice-frequency.component';

describe('DiceFrequencyComponent', () => {
  let component: DiceFrequencyComponent;
  let fixture: ComponentFixture<DiceFrequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceFrequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
