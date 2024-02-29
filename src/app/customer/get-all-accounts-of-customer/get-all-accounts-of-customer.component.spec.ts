import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAccountsOfCustomerComponent } from './get-all-accounts-of-customer.component';

describe('GetAllAccountsOfCustomerComponent', () => {
  let component: GetAllAccountsOfCustomerComponent;
  let fixture: ComponentFixture<GetAllAccountsOfCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllAccountsOfCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllAccountsOfCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
