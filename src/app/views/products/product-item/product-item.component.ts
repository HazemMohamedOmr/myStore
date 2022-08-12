import { Product } from './../../../core/interfaces/product';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product;
  selected:string = "1";

  constructor(private data:DataService, private _snackBar: MatSnackBar) {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      url: '',
      quantity: 0
    }
  }

  ngOnInit(): void {
  }

  cartProduct(prod:Product):void{
    prod.quantity = parseInt(this.selected);
    let res = this.data.sendProd(prod);
    this.openSnackBar(res, "close");
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 3000
    });
  }

}
