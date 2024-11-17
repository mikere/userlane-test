import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsEditDialogComponent } from './user-details-edit-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserDetailsEditDialogComponent', () => {
  let component: UserDetailsEditDialogComponent;
  let fixture: ComponentFixture<UserDetailsEditDialogComponent>;
  let mockMatDialogRef: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsEditDialogComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: MatDialogRef,
          useFactory: () => jasmine.createSpyObj('MatDialogRef', ['close']),
        },
        provideMockStore(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
