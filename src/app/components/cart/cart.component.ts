import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/Services/cart.service';
import { MenuType } from 'src/app/Services/menu.service';
import { OrderService } from 'src/app/Services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: Array<MenuType> = [];
  public totalPrice: number = 0;
  public cartList: string = "";

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.cartService.currentDataCart$.subscribe(x => {
      if (x) {
        this.items = x;
        this.totalPrice = x.reduce((sum, current) => sum + (current.price * current.quantity), 0);
      }
    })
  }

  public remove(food: MenuType) {
    this.cartService.removeCart(food);
  }

  CheckoutForm = new FormGroup({
    name: new FormControl<string | null>('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl<string | null>('', [Validators.required, Validators.minLength(10)])
  })

  onSubmit() {
    console.log(this.CheckoutForm);

    // Create cart list
    this.items.forEach((food) => {
      this.cartList += food.food_name + ', ';
    });

    if (this.cartList.slice(-2) === ', ') {
      this.cartList = this.cartList.substring(0, this.cartList.length - 2);
    }

    // POST to orders table
    this.orderService.addOrder(
      this.CheckoutForm.value.name!,
      this.CheckoutForm.value.phone!,
      this.cartList!,
      this.totalPrice.toFixed(2).toString()!
    ).subscribe();

    // Go to orders page after a short delay so database can update
    setTimeout(() => {
      this.router.navigateByUrl("/orders");
    }
      , 1000);
  }

}
