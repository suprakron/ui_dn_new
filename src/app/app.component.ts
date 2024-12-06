import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { MedicineListComponent } from "./medicine-list/medicine-list.component";
import { ProductHospitalComponent } from "./product-hospital/product-hospital.component";
import { ProductPoppularComponent } from "./product-poppular/product-poppular.component";
import { ProductMonthlyComponent } from "./product-monthly/product-monthly.component";
import { ProductnewComponent } from "./productnew/productnew.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, BannerComponent, ProductListComponent, MedicineListComponent, ProductHospitalComponent, ProductPoppularComponent, ProductMonthlyComponent, ProductnewComponent]
})
export class AppComponent {
  title = 'UI Design';
}
