import { Injectable } from '@angular/core';
import { Item_productdetails } from 'src/app/mocks/product-details.mock';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor() {} // injecter dans le constructor le productervcie
  // Cette fonction crée l'historique
  private createHistory() {
    // Pour l'usage localStorage, je suis obligé de le transfomer en format JSON
    const stringifyHistory = JSON.stringify([]);
    // Je le stocke dans le LocalStorage('clé', 'Valeur')
    localStorage.setItem('history', stringifyHistory);
  }

  // Cette fonction lance soit la création de l'historique, soit récupère l'historique s'il existe déjà
  getHistory() {
    // Je récupère les valeurs de 'basket' du LocalStorage dans une constante
    const history = localStorage.getItem('history');
    // Si valeur existe
    if (history) {
      // Je retourne la valeur en parsant le JSON
      return JSON.parse(history);
    } else {
      // Sinon je déclenche la méthode de création d'un nouveau basket ET je re-rentre dans la méthode
      // pour parser le JSON du nouveau panier créé
      this.createHistory();
      this.getHistory();
    }
  }

  // Cette fonction ajoute un produit à l'historique ou retourne l'historique s'il existe déjà
  addProductToHistory(product: Item_productdetails) {
    // Je récupère l'historique dans une constante
    const history = this.getHistory();
    // Je vérifie si le produit existe déjà dans l'historique
    const alreadyInHistory = history.find(
      (newProduct: Item_productdetails) =>
        newProduct.id === product.id
    );
    // S'in existe déjà
    if (alreadyInHistory) {
      return history;
    } else {
      // S'il n'existe pas, je l'ajoute à l'historique
      history.push(product);
    }
    localStorage.setItem('history', JSON.stringify(history));
  }
}
