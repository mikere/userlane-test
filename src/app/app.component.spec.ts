import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-error-tracker',
  standalone: true,
})
class MockErrorTrackerComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterOutlet, MockErrorTrackerComponent],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should display the title', () => {
    const titleDebugElement = fixture.debugElement.query(By.css('h1'));

    expect(titleDebugElement).toBeDefined();
    expect(titleDebugElement.nativeElement.textContent).toEqual(
      'Userlane Angular Task'
    );
  });
});
