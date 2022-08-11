import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { ProductsComponent } from './products.component';
import { MaterialModule } from 'src/app/core/material/material.module';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product-details', component: ProductItemDetailsComponent}
];

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductItemDetailsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class ProductsModule { }
