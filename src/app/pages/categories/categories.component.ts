import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item_categorie, ITEM_CATEGORIES } from 'src/app/mocks/categories.mock';

// Top-catégories FEMMES, ENFANTS, HOMMES, ...
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
 item_categories: Item_categorie[] = ITEM_CATEGORIES;
 titreToDisplay='CATEGORIES';
}

