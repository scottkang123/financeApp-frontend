import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderComponent } from './calendar.component';

describe('CalenderComponent', () => {
  let component: CalenderComponent;
  let fixture: ComponentFixture<CalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
