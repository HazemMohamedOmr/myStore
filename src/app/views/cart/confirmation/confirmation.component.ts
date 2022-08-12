import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  bill: any = {};

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.bill = this.data.confirmBill
    console.log(this.bill);
    
  }

}
