import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTrackerComponent } from './error-tracker.component';

describe('ErrorTrackerComponent', () => {
  let component: ErrorTrackerComponent;
  let fixture: ComponentFixture<ErrorTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
