import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceDataFilterComponent } from './finance-data-filter.component';

describe('FinanceDataFilterComponent', () => {
  let component: FinanceDataFilterComponent;
  let fixture: ComponentFixture<FinanceDataFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceDataFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinanceDataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
