import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  bill: any = {};

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.bill = this.cart.confirmBill
    console.log(this.bill);
    
  }

}
