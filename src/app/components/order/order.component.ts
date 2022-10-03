import { Component, OnInit } from '@angular/core';
import { OrderService, IOrder } from 'src/app/Services/order.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: IOrder[] = [];
  constructor(private myOrderService: OrderService, public aut:AuthService) {}

  ngOnInit(): void {
    this.myOrderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

}
