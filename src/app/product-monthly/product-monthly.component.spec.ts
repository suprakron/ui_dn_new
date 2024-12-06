import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMonthlyComponent } from './product-monthly.component';

describe('ProductMonthlyComponent', () => {
  let component: ProductMonthlyComponent;
  let fixture: ComponentFixture<ProductMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMonthlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
