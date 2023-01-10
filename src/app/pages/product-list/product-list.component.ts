import { Component } from '@angular/core';
import { Doudounne, DOUDOUNNES } from 'src/app/mocks/product.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

doudounnes: Doudounne[] = DOUDOUNNES;

}
