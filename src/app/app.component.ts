import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { MedicineListComponent } from "./medicine-list/medicine-list.component";
import { ProductHospitalComponent } from "./product-hospital/product-hospital.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, BannerComponent, ProductListComponent, MedicineListComponent, ProductHospitalComponent]
})
export class AppComponent {
  title = 'UI Design';
}
