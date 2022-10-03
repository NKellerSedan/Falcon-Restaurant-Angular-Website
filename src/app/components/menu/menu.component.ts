import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
import { MenuService, MenuType } from 'src/app/Services/menu.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  searchValue: string = '';
  totalQuantity: number = 0;
  categories: string[] = ["Starters", "Mains", "Curries", "Desserts", "Beverages"];
  constructor( private myMenuService: MenuService, public adminService: AdminServiceService, private cartService:CartService) { }

  ngOnInit(): void {
    this.myMenuService.getMenu().subscribe((data) => {
     this.adminService.setMenu(data) 
    });
  }

  public addCart(food:MenuType)
  {
    this.cartService.addCart(food);
    this.totalQuantity++;
  }

}
