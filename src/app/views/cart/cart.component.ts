import { Product } from './../../core/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = [];
  price: number = 0;

  constructor(private data:DataService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.data.cartProducts.subscribe(res =>{
      this.cartProducts = res;
    });

    this.data.totalPrice.subscribe(res =>{
      this.price = res;
    });
  }

  update(prod:Product):void{
    this.data.sendProd(prod);
  }

  removeProd(prod:Product):void{
    let msg = this.data.removeProd(prod);
    this.openSnackBar(msg, "OK!");
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 3000
    });
  }

}
