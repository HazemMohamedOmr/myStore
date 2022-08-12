import { Product } from 'src/app/core/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

  id: number = 0;
  product:Product;
  selected:string = "1";

  constructor(private data:DataService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { 
    this.product = {
      id: 0,
      name: '',
      description: '',
      url: '',
      price: 0,
      quantity: 0
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.data.getProduct(this.id).subscribe(res =>{
      console.log("I'm inside component");
      res.quantity = 0;
      this.product = res;
      console.log(this.product);
    })
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
