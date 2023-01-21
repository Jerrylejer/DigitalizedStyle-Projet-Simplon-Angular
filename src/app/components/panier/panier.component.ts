import { Component } from '@angular/core';
import { BasketProduct, BasketService } from 'src/app/services/basket/basket.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
basket: BasketProduct[] = [];

constructor(
  private basketService: BasketService){}

ngOnInit() {
  this.basket = this.basketService.getBasket();
}
}
