import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBadgeVisibility(): void {
    this.hidden = !this.hidden;
  }

}
