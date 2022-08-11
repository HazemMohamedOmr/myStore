import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hidden: boolean = true;
  notifyNum: number = 0;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.cartProducts.subscribe(res =>{
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
