import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import {
  ITEMPRODUCTDETAILS,
  Item_productdetails,
} from 'src/app/mocks/product-details.mock';
import { BasketProduct, BasketService } from 'src/app/services/basket/basket.service';
import { HistoryService } from 'src/app/services/history/history.service';

// Produits
@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css'],
})
export class OneProductComponent {
  items: Item_productdetails[] = ITEMPRODUCTDETAILS;
  item?: Item_productdetails;
  quantity: number = 0;

 
  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private basketService: BasketService,
    private _toastService: ToastService,
    private historyService: HistoryService) {}

  addInfoToast() {
    this._toastService.info("L'article est ajouté à votre panier");
  }

  ngOnInit() {
    this.getProduct();
    // Je récupère en console les infos de mon objet, c'est ok
    // console.log(this.item?.image);
  }

  // A la sortie de la page produit, je rajoute le produit à l'historique
  ngOnDestroy() {
    this.addToHistory();
  }

  // Méthode qui ajoute le produit en appelant la méthode correspondante du service
  addToHistory() {
    if(this.item) {
      this.historyService.addProductToHistory(this.item);
    }
  }

  getProduct() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundProduct = this.items.find((singleItem) => singleItem.id === id);
    if (foundProduct) {
      this.item = foundProduct;
      console.log(foundProduct);
    } else {
      this.router.navigate(['/not-found']);
    }
  }

  // Méthode pour ajouter le produit
  addToBasket() {
    if(!this.item) return;
    const basketProduct: BasketProduct = {
      product: this.item,
      quantity: this.quantity += 1
    }
    this.basketService.addProductToBasket(basketProduct);
    console.log(basketProduct);
 }
}
