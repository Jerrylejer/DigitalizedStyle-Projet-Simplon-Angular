import { Component } from '@angular/core';
import { PICTURE, Picture } from 'src/app/mocks/product.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pictures: Picture[] = PICTURE;
}
