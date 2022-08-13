import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hidden: boolean = true;
  notifyNum: number = 0;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartProducts.subscribe(res =>{
      this.notifyNum = res.length;
      this.toggleBadgeVisibility();
    })
  }

  toggleBadgeVisibility(): void {
    if(this.notifyNum == 0)
      this.hidden = true;
    else
      this.hidden = false;
  }

}
