import { Injectable } from '@angular/core';
import { Item_productdetails } from 'src/app/mocks/product-details.mock';
import { ProductsService } from '../products/products.service';

export interface BasketProduct {
  product: Item_productdetails;
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class BasketService {
  // Total du panier
  totalPrice: number = 0;
  // Quantité de produits du panier
  productQuantity: number = 0;

  constructor(private productsService: ProductsService) {}

  // Cette fonction crée le panier
  private createBasket() {
    // Je crée un basket de type tableau de l'interface BasketProduct
    const newBasket: BasketProduct[] = [];
    // Pour l'usage localStorage, je suis obligé de le transfomer en format JSON
    const stringifyBasket = JSON.stringify(newBasket);
    // Je le stocke dans le LocalStorage('clé', 'Valeur')
    localStorage.setItem('basket', stringifyBasket);
  }

  // Cette fonction lance soit la création du panier, soit récupère le panier s'il existe déjà
  getBasket() {
    // Je récupère les valeurs de 'basket' du LocalStorage dans une constante
    const basket = localStorage.getItem('basket');
    // Si valeur existe
    if (basket) {
      // Je retourne la valeur en parsant le JSON
      return JSON.parse(basket);
    } else {
      // Sinon je déclenche la méthode de création d'un nouveau basket ET je re-rentre dans la méthode
      // pour parser le JSON du nouveau panier créé
      this.createBasket();
      this.getBasket();
    }
  }

  // Cette fonction ajoute un produit au panier ou en modifie la quantité si existe déjà
  addToBasket(basketProduct: BasketProduct) {
    // Je récupère le panier dans une constante
    const basket = this.getBasket();
    // Je vérifie si le produit existe déjà dans le panier
    const alreadyInBasket = basket.find((product: BasketProduct) => product.product.id === basketProduct.product.id);
    // S'in existe déjà
    if(alreadyInBasket) {
      // Je vérifie son ID dans le tableau basket
      const basketProductId = basket.indexOf(alreadyInBasket);
      // J'ajoute la quantité
      basket(basketProductId).quantity += basketProduct.quantity;
    } else {
      // S'il n'existe pas, je l'ajoute au basket
      basket.push(basketProduct)
      // basket.push('basketProduct')
      localStorage.setItem('basket', (basket));
    }
  }
}
