import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { 
    path: 'products',
    loadChildren: ()=> import('./views/products/products.module').then(m => m.ProductsModule)
  },
  { 
    path: 'cart',
    loadChildren: ()=> import('./views/cart/cart.module').then(m => m.CartModule)
  },
  { path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
