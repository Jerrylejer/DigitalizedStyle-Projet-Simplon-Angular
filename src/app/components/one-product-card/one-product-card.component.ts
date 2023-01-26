import { Component, Input } from '@angular/core';
import { Item_productdetails } from 'src/app/mocks/product-details.mock';

@Component({
  selector: 'app-one-product-card',
  templateUrl: './one-product-card.component.html',
  styleUrls: ['./one-product-card.component.css'],
  
})
export class OneProductCardComponent {
  @Input() Item_productdetails!: Item_productdetails;
}

