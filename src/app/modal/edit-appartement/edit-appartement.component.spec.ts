import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppartementComponent } from './edit-appartement.component';

describe('EditAppartementComponent', () => {
  let component: EditAppartementComponent;
  let fixture: ComponentFixture<EditAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAppartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
