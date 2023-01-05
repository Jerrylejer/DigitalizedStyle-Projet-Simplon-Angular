import { Component } from '@angular/core';
import { PICTURE, Picture } from 'src/app/mocks/product.mock';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent {
  pictures: Picture[] = PICTURE;
}
