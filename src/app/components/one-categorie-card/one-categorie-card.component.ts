import { Component, Input } from '@angular/core';
import { Item } from 'src/app/mocks/product.mock';

@Component({
  selector: 'app-one-categorie-card',
  templateUrl: './one-categorie-card.component.html',
  styleUrls: ['./one-categorie-card.component.css']
})
export class OneCategorieCardComponent {
  @Input() item!: Item;
}
