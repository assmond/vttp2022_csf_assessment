// Implement the methods in PizzaService for Task 3
// Add appropriate parameter and return type

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PizzaService {
  private baseUrl = 'http://localhost:8080/api/';


  constructor(private httpClient: HttpClient) { }

  // POST /api/order
  // Add any required parameters or return type
  createOrder(order: object) {
    return this.httpClient.post(`${this.baseUrl}`+'order', order);
  }

  // GET /api/order/<email>/all
  // Add any required parameters or return type
  getOrders(email: String) {
    return this.httpClient.get(`${this.baseUrl}/order/${email}/all`);
  }

}
