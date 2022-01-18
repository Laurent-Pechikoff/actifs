import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdminAppartementComponent } from './liste-admin-appartement.component';

describe('ListeAdminAppartementComponent', () => {
  let component: ListeAdminAppartementComponent;
  let fixture: ComponentFixture<ListeAdminAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdminAppartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdminAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
