import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonelistComponent } from './phonelist.component';

describe('PhonelistComponent', () => {
  let component: PhonelistComponent;
  let fixture: ComponentFixture<PhonelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
