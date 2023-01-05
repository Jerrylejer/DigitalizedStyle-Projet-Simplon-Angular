import { Component } from '@angular/core';
import { Item, ITEMS } from 'src/app/mocks/product.mock';

@Component({
  selector: 'app-one-categorie',
  templateUrl: './one-categorie.component.html',
  styleUrls: ['./one-categorie.component.css']
})
export class OneCategorieComponent {
  items: Item[] = ITEMS;
}
