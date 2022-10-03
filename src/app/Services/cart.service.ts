import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuType } from 'src/app/Services/menu.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cart = new BehaviorSubject<Array<MenuType>>([]);
  public currentDataCart$ = this.cart.asObservable();

  constructor() { }

  public addCart(newData: MenuType) {
    // get the current value
    let listCart = this.cart.getValue();
    //If it is not the first item in the cart
    if (listCart) {
      // Search if item already loaded in the cart
      let objIndex = listCart.findIndex((obj => obj.food_id == newData.food_id));
      //If one is already loaded, increase its quantity
      if (objIndex != -1) {
        listCart[objIndex].quantity += 1;
      }
      //If it is the first item of that type, add it to the cart
      else {
        listCart.push(newData);
      }
    }
    //If it is the first element, initialize it
    else {
      listCart = [];
      listCart.push(newData);
    }

    this.cart.next(listCart);
  }

  public removeCart(newData: MenuType) {
    //Get the current cart value
    let listCart = this.cart.getValue();
    //Look for the cart item to delete
    let objIndex = listCart.findIndex((obj => obj.food_id == newData.food_id));
    if (objIndex != -1) {
      // Set the quantity to 1 (since the array values are modified by reference, if added again then the quantity would not be reset otherwise)
      listCart[objIndex].quantity = 1;
      // Remove the item from the cart array
      listCart.splice(objIndex, 1);
    }

    this.cart.next(listCart);
  }

}
