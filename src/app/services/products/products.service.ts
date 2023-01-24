import { Injectable } from '@angular/core';
import { Item_productdetails, ITEMPRODUCTDETAILS } from '../../mocks/product-details.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  // Accessible ailleurs via le constructor(private productsService: ProductsService) {}
  // Retourner tous les produits
  getProducts(): Item_productdetails[] {
    return ITEMPRODUCTDETAILS;
  }
  // Retourner un seul produit
  getProduct(id:number): Item_productdetails | undefined {
    return ITEMPRODUCTDETAILS.find((product)=> product.id === id);
  }
}
