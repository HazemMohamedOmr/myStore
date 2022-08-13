import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  private price:number = 0; 

  paymentForm = this.fb.group({
    fullName: ['', Validators.compose(
      [Validators.required, Validators.minLength(3)]
    )],
    address: ['', Validators.compose(
      [Validators.required, Validators.minLength(6)]
    )],
    creditCard: ['', Validators.compose(
      [Validators.required, Validators.minLength(16), Validators.pattern("^[0-9]*$")]
    )],
    checkout: ['']
  })

  constructor(
    private cart:CartService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cart.totalPrice.subscribe(res =>{
      this.price = res;
    })
  }

  onSubmit():void{
    if(!this.paymentForm.invalid){
      this.paymentForm.get('checkout')?.setValue(this.price);
      this.cart.setConfirmBill(this.paymentForm.value);
      this.router.navigate(['confirmation'], {relativeTo: this.route});
      this.cart.resetCartProducts();
    }
  }

  get fullName(){
    return this.paymentForm.get('fullName');
  }

  get address(){
    return this.paymentForm.get('address');
  }

  get creditCard(){
    return this.paymentForm.get('creditCard');
  }

}
