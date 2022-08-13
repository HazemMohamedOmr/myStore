import { DataService } from './../../core/services/data.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private dataService:DataService, private cart:CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(d => {
      d.forEach(element => {
        element['quantity'] = 0;
      });
      this.products = d;
    })
  }

  cartProduct(prod:Product):void{
    let res = this.cart.sendProd(prod);
    this.openSnackBar(res, "close");
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 3000
    });
  }

}
