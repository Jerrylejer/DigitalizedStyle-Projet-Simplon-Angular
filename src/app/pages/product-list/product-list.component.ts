import { Component } from '@angular/core';
import {
  ITEMPRODUCTDETAILS,
  Item_productdetails,
} from 'src/app/mocks/product-details.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  item_productdetails: Item_productdetails[] = ITEMPRODUCTDETAILS;
}
