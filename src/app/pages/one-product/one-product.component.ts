import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ITEMPRODUCTDETAILS,
  Item_productdetails,
} from 'src/app/mocks/product-details.mock';
import { BasketProduct, BasketService } from 'src/app/services/basket/basket.service';

// Produits
@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css'],
})
export class OneProductComponent {
  items: Item_productdetails[] = ITEMPRODUCTDETAILS;
  item?: Item_productdetails;
  quantity: number = 1;
  addToCart: any = this.addToBasket();

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private basketService: BasketService) {}

  ngOnInit() {
    this.getProduct();
    // Je récupère en console les infos de mon objet, c'est ok
    console.log(this.item?.image);
  }

  getProduct() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundProduct = this.items.find((singleItem) => singleItem.id === id);
    if (foundProduct) {
      this.item = foundProduct;
    } else {
      this.router.navigate(['/not-found']);
    }
  }

  addToBasket() {
    if(!this.item) return;
    const basketProduct: BasketProduct = {
      product: this.item,
      quantity: this.quantity
    }
    this.basketService.addToBasket(basketProduct);
 }
}
