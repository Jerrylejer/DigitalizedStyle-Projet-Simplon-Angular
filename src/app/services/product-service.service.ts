import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  //Fonction pour récupérer les produits du mocks
  //Return la liste des produits
  getProducts(): ProductServiceService [] {
    return PRODUCTSSERVICE;
  }

  //Return un produit en fonction de son id, 19
  return ProductServiceService.find(product => product.id === id);

}
