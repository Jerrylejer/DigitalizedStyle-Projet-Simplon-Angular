import { Injectable } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  totalPrice = 0;
  productQuantity = 0;


  constructor(private productsService: ProductsService) { }
}

