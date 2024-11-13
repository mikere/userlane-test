import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsEditDialogComponent } from './user-details-edit-dialog.component';

describe('UserDetailsEditDialogComponent', () => {
  let component: UserDetailsEditDialogComponent;
  let fixture: ComponentFixture<UserDetailsEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsEditDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailsEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
