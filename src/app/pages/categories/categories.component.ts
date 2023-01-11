import { Component } from '@angular/core';
import { Item_categorie, ITEM_CATEGORIES } from 'src/app/mocks/categories.mock';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
 item_categories: Item_categorie[] = ITEM_CATEGORIES;
}
