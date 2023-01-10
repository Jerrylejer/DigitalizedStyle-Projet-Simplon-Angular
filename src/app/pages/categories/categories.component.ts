import { Component } from '@angular/core';
import { Product, PRODUCTS } from 'src/app/mocks/product.mock';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  products: Product[] = PRODUCTS;
}
