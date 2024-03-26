import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioExpandedComponent } from './portfolio-expanded.component';

describe('PortfolioExpandedComponent', () => {
  let component: PortfolioExpandedComponent;
  let fixture: ComponentFixture<PortfolioExpandedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioExpandedComponent]
    });
    fixture = TestBed.createComponent(PortfolioExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
