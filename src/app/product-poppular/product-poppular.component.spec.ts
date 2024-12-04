import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPoppularComponent } from './product-poppular.component';

describe('ProductPoppularComponent', () => {
  let component: ProductPoppularComponent;
  let fixture: ComponentFixture<ProductPoppularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPoppularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPoppularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
