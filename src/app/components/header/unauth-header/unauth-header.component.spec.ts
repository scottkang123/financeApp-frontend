import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthHeaderComponent } from './unauth-header.component';

describe('UnauthHeaderComponent', () => {
  let component: UnauthHeaderComponent;
  let fixture: ComponentFixture<UnauthHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnauthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
