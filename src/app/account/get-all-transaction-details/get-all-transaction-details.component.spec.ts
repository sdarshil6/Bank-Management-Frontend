import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTransactionDetailsComponent } from './get-all-transaction-details.component';

describe('GetAllTransactionDetailsComponent', () => {
  let component: GetAllTransactionDetailsComponent;
  let fixture: ComponentFixture<GetAllTransactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllTransactionDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllTransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
