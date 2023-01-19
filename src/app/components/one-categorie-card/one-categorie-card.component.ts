import { Component, Input } from '@angular/core';
import { Item_categorie } from 'src/app/mocks/categories.mock';
import { Item, ItemProduct } from 'src/app/mocks/products-list.mock';
@Component({
  selector: 'app-one-categorie-card',
  templateUrl: './one-categorie-card.component.html',
  styleUrls: ['./one-categorie-card.component.css'],
})
export class OneCategorieCardComponent {
  // MANON = Ici comme on a changé de Data on change de type
  // Je récupère mon mock categories
  @Input() categorie!: Item_categorie;
  // Je récupère mes gammes de produits
  @Input() range!: ItemProduct;
  // ngOnInit() {
  //   console.log(this.range);
  // }
}
