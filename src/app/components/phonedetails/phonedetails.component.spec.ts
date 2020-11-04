import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonedetailsComponent } from './phonedetails.component';

describe('PhonedetailsComponent', () => {
  let component: PhonedetailsComponent;
  let fixture: ComponentFixture<PhonedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
