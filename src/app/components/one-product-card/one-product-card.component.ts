import { Component, Input } from '@angular/core';
import { Item_productlist } from 'src/app/mocks/product-list.mock';



@Component({
  selector: 'app-one-product-card',
  templateUrl: './one-product-card.component.html',
  styleUrls: ['./one-product-card.component.css'],
})
export class OneProductCardComponent {
 @Input() item_productlist!: Item_productlist;

}
