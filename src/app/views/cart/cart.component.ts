import { Product } from './../../core/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = [];
  price: number = 0;

  constructor(private cart:CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cart.cartProducts.subscribe(res =>{
      this.cartProducts = res;
    });

    this.cart.totalPrice.subscribe(res =>{
      this.price = res;
    });
  }

  update(prod:Product):void{
    this.cart.sendProd(prod);
  }

  removeProd(prod:Product):void{
    let msg = this.cart.removeProd(prod);
    this.openSnackBar(msg, "OK!");
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 3000
    });
  }

}
