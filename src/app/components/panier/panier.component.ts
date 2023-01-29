import { Component } from '@angular/core';

import {
  BasketProduct,
  BasketService,
} from 'src/app/services/basket/basket.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent {
  // basket sera notre panier
  basket: BasketProduct[] = [];
  // quantity: number = 0;
  
  constructor(public basketService: BasketService) { 
    // Je récupère les méthodes contenues dans le BasketService
    // this.basketService.getTotalPrice();
    // this.basketService.getTotalQuantity();
  }

  ngOnInit() {
    this.getBasket();
  }

  getBasket() {
    this.basket = this.basketService.getBasket();
  }

  removeProduct(index: number) {
    this.basketService.removeProductFromBasket(index);
    this.getBasket();
  }
}
