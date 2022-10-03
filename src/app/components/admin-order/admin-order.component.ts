import { Component, OnInit } from '@angular/core';
import { AdminServiceService, OrderType } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
  searchValue: string = '';
  order: OrderType[] = [];
  rowID: number = 0;
  constructor(public adminService: AdminServiceService) {

    this.adminService.getOrder().subscribe((data)=>{
      this.order = data
    })

   }

  ngOnInit(): void {

    this.adminService.getOrder().subscribe((data)=>{
      this.order = data
    })
  }

}
