import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { MenuType } from './menu.service';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';

export interface AddingFoodType {
  
  food_id: string;
  food_name: string;
  price: number;
  description: string;
  category: string;
  image: string;

}

export interface OrderType {
  
  email: string;
  name: string;
  phone: string;
  cart: string;
  total: string;
  date: string;

}



@Injectable({
  providedIn: 'root'
})





export class AdminServiceService {

  // invokeFirstComponentFunction = new EventEmitter();    
  // subsVar: Subscription | undefined; 

  // onFirstComponentButtonClick() {    
  //   this.invokeFirstComponentFunction.emit();   
  //   console.log("cas") 
  // } 

//  menu$! : Observable<MenuType[]> ;

menu : MenuType[] = []

selectedFood : MenuType = {   "_id": "",
  "food_id": "",
  "food_name": "",
  "price": 0,
  "description": "",
  "category": "",
  "active": "",
  "image": "",
  "quantity": 0
}


//selectedFood$! : Observable<MenuType> 

userForm = new FormGroup({
  food_id: new FormControl<string | null>('', [
    Validators.required,
   // Validators.minLength(1),
  ]),
  food_name: new FormControl<string | null>('', [
    Validators.required,
    //Validators.minLength(3),
  ]),
  price: new FormControl<string | null>('', [
    Validators.required,
   // Validators.minLength(1),
  ]),
  category: new FormControl<string | null>('', [
    Validators.required,
    //Validators.minLength(3),
  ]),
  image: new FormControl<string | null>('', [
    Validators.required,
   // Validators.minLength(3),
  ]),
  description: new FormControl<string | null>('', [
    Validators.required,
    //Validators.minLength(5),
  ]),
});




  url: string = "https://shielded-depths-40144.herokuapp.com/foods"

  urlOrder: string = "https://shielded-depths-40144.herokuapp.com/orders"


  constructor(private http: HttpClient) { }


  getOrder(): Observable<OrderType[]>{
    
    return this.http.get<OrderType[]>(this.urlOrder )
  }

  updateFood(data:AddingFoodType):Observable<any>{
    const headers = { 'content-type': 'application/json'} 
    console.log("url")
    console.log(this.url+"/"+data.food_id)
    return this.http.put<AddingFoodType>(this.url+"/"+data.food_id,data,{'headers':headers} )

  }

  deleteFood(id:string):Observable<any>{

    return this.http.delete<AddingFoodType>(this.url+"/"+id )


  }

  addFood(data:AddingFoodType):Observable<any> {

    
    const headers = { 'content-type': 'application/json'} 
    return this.http.post<AddingFoodType>(this.url,data,{'headers':headers} )

  }

  // getMenu(){
  //   return this.menu$
  // }

  // setMenu(menu: Observable<MenuType[]>){

  //   this.menu$ = menu
  // }

  getMenu(){
    return this.menu
  }

  setMenu(menu:MenuType[] ){
    this.menu = menu
  }

  getSelectedFood(){
    return this.selectedFood
  }

  setSelectedFood(food:MenuType){
 this.selectedFood = food

    
  }

  getUserForm(){
    return this.userForm
  }
  

  findFood(id:string){
    



    
    // console.log(this.menu)
    // console.log(id)

    // this.menu = this.menu.filter((m)=> {
    //   m.food_id.includes(id)
    // })

    // console.log(this.menu.filter((m)=> {
    //   m.food_id == id
    // }))

    //console.log( this.menu)

  //   this.menu = this.menu.filter((t) =>
  //   t.food_id
  //     .toLowerCase()
  //     .includes(id)
  // );
  //console.log(this.menu )

  this.menu.map((m)=>{
    if (m.food_id == id) { 
    console.log(m)

    this.setSelectedFood(m)
  
  
  }
  })
  this.userForm.updateValueAndValidity()
  this.userForm.value.food_id = this.selectedFood.food_id
  this.userForm.value.food_name = this.selectedFood.food_name
  this.userForm.value.price = this.selectedFood.price.toString()
  this.userForm.value.category = this.selectedFood.category
  this.userForm.value.image = this.selectedFood.image
  this.userForm.value.description = this.selectedFood.description

  this.userForm.controls['food_id'].setValue(this.selectedFood.food_id)
  this.userForm.controls['food_name'].setValue(this.selectedFood.food_name)
  this.userForm.controls['price'].setValue(this.selectedFood.price.toString())
  this.userForm.controls['category'].setValue(this.selectedFood.category)
  this.userForm.controls['image'].setValue(this.selectedFood.image)
  this.userForm.controls['description'].setValue(this.selectedFood.description)


  }

}
