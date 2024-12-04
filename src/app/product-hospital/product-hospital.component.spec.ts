import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHospitalComponent } from './product-hospital.component';

describe('ProductHospitalComponent', () => {
  let component: ProductHospitalComponent;
  let fixture: ComponentFixture<ProductHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHospitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
