import { Component } from '@angular/core';
import { ITEMPRODUCTLISTS, Item_productlist } from 'src/app/mocks/product-list.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  item_productlists: Item_productlist[] = ITEMPRODUCTLISTS;

}
