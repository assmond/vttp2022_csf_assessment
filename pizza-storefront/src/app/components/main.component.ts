import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Order } from '../models';
import { Router } from '@angular/router';

const SIZES: string[] = [
  "Personal - 6 inches",
  "Regular - 9 inches",
  "Large - 12 inches",
  "Extra Large - 15 inches"
]

const PizzaToppings: string[] = [
    'chicken', 'seafood', 'beef', 'vegetables',
    'cheese', 'arugula', 'pineapple'
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pizzaSize = SIZES[0]

  constructor(private pizzaservice: PizzaService, private router: Router) {}
  
  order : Order=new Order();

  ngOnInit(): void {
  }

  updateSize(size: string) {
    this.pizzaSize = SIZES[parseInt(size)]
  }

  createOrder(){
    this.pizzaservice.createOrder(this.order).subscribe( data =>{
        console.log(data);
      },
      error => console.log(error));
  }

  goToOrderList(){
    this.router.navigate(['/api/email']);
  }

  onSubmit(){
    console.log(this.order);
    this.createOrder();
  }

  onEmailSearch(){
    this.pizzaservice.getOrders(this.order.email).subscribe(data=>{
      console.log(data);
    })

    this.goToOrderList();
  }

}
