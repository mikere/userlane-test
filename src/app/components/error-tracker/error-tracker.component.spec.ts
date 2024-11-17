import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initialState as userInitialState } from 'src/app/store/user.reducer';
import { selectError, UserState } from 'src/app/store';
import { Maybe } from 'src/app/services/model';
import { ErrorTrackerComponent } from './error-tracker.component';

describe('ErrorTrackerComponent', () => {
  let component: ErrorTrackerComponent;
  let fixture: ComponentFixture<ErrorTrackerComponent>;
  let mockStore: MockStore;
  let mockSnackBar: any;
  let mockSelectErrorSelector: MemoizedSelector<UserState, Maybe<Error>>;

  beforeEach(async () => {
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      imports: [
        ErrorTrackerComponent,
        BrowserAnimationsModule,
        MatSnackBarModule,
      ],
      providers: [
        provideMockStore({
          initialState: { user: userInitialState },
        }),
      ],
    }).compileComponents();

    TestBed.overrideComponent(ErrorTrackerComponent, {
      set: {
        providers: [
          {
            provide: MatSnackBar,
            useValue: mockSnackBar,
          },
        ],
      },
    });

    mockStore = TestBed.inject(Store) as MockStore;
    mockSelectErrorSelector = mockStore.overrideSelector(
      selectError,
      undefined
    );

    fixture = TestBed.createComponent(ErrorTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open a snackbar on error', () => {
    mockSelectErrorSelector.setResult(new Error('test error message'));
    mockStore.refreshState();
    expect(mockSnackBar.open).toHaveBeenCalledWith(
      'test error message',
      'Dismiss',
      jasmine.any(Object)
    );
  });
});
