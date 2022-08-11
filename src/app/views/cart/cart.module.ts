import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';



@NgModule({
  declarations: [
    CartComponent,
    PaymentFormComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
