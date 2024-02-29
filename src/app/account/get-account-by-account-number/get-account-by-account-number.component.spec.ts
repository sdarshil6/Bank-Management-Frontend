import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAccountByAccountNumberComponent } from './get-account-by-account-number.component';

describe('GetAccountByAccountNumberComponent', () => {
  let component: GetAccountByAccountNumberComponent;
  let fixture: ComponentFixture<GetAccountByAccountNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAccountByAccountNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAccountByAccountNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
