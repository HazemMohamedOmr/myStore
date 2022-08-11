import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [
    ProductItemComponent,
    ProductItemDetailsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
