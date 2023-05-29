import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
OrderService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private service: OrderService){}
  foodDate: any 
  ngOnInit(): void {
    this.foodDate = this.service. varDetails 
  }
}
