import { Component, Input } from '@angular/core';
import { Item_categorie } from 'src/app/mocks/categories.mock';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.css']
})
export class CategoriesCardComponent {
 @Input() item_categorie!: Item_categorie;

}
