import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CartComponent },
  { path: 'confirmation', component: ConfirmationComponent}
];

@NgModule({
  declarations: [
    CartComponent,
    PaymentFormComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
