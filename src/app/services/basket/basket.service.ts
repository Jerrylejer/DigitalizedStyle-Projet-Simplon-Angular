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
  addProductToBasket(basketProduct: BasketProduct) {
    // Je récupère le panier dans une constante
    const basket = this.getBasket();
    // Je vérifie si le produit existe déjà dans le panier
    const alreadyInBasket = basket.find((product: BasketProduct) => product.product.id === basketProduct.product.id);
    // S'in existe déjà
    if(alreadyInBasket) {
      // Je vérifie son ID dans le tableau basket
      const basketProductId = basket.indexOf(alreadyInBasket);
      // J'ajoute la quantité
      basket[basketProductId].quantity += basketProduct.quantity;
    } else {
      // S'il n'existe pas, je l'ajoute au basket
      basket.push(basketProduct);
      // localStorage.setItem('basket', basket); => Je récupère l'objet entier ! 
      // ! Voir pour faire une méthode afin d'enregistrer le panier
      localStorage.setItem('basket', JSON.stringify(basket));
    }
  }

  // Cette fonction retire le produit du panier
  //! Il faudra créer un bouton dans le panier.html pour supprimer le produit et le binder (click) = "removeProduct()"
  //! Je récupère l'index avec une ngFor => index généré dans le html (index de liste, rien à voir avec les mocks)
  removeProductFromBasket(index: number) {
    // Je récupère mon panier de base
    const basket = this.getBasket();
    //! Je supprime le produit dont l'index est renseigné en argument 
    basket.splice(index, 1);
    // ! Voir pour faire une méthode afin d'enregistrer le panier
    localStorage.setItem('basket', JSON.stringify(basket));
  }

  // Cette fonction calcule le prix total du panier
  //! Il faudra créer un champs "Prix total" dans le panier.html pour afficher le calcul {{this.basketService.totalPrice}}
  getTotalPrice(): void {
    // Je récupère le panier courant
    const basket = this.getBasket();
    // Calcul du prix total
    const total = basket.reduce((accumulator: number, currentValue: BasketProduct) => {
      // Id du produit dans mon mock
      const productId = this.productsService.getProduct(currentValue.product.id);
      console.log(productId);
      // Si le produit n'existe pas, je retourne la valeur de l'accumulateur*
      if(!productId) return accumulator;
      // Si existe
      return accumulator + (currentValue.quantity * productId.prix);
    }, 0)
    // Je retourne la valeur Totale à la variable totalPrice
    this.totalPrice = total;
    console.log(this.totalPrice);
  }

  // Cette fonction calcule le nombre de produits dans le panier
  //! Il faudra créer un champs "Total articles" dans le panier.html pour afficher le calcul {{this.basketService.productQuantity}}
  getTotalQuantity(): void {
    // Je récupère le panier
    const basket = this.getBasket();
    // On calcule la quantité des items
    const total = basket.reduce((accumulator: number, currentValue: BasketProduct) => {
      return accumulator += currentValue.quantity;
    }, 0)
    // Je retourne la quantité total à la variable productQuantity
    this.productQuantity = total;
    console.log(this.productQuantity);
  }

  // Initialisation du panier à l'ouverture de l'app
  iniBasket() {
    this.getBasket();
    this.getTotalPrice;
    this.getTotalQuantity
  }
}