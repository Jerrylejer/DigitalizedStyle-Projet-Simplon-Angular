import { Component, Input } from '@angular/core';
import { Doudounne } from 'src/app/mocks/product.mock';


@Component({
  selector: 'app-one-product-card',
  templateUrl: './one-product-card.component.html',
  styleUrls: ['./one-product-card.component.css']
})
export class OneProductCardComponent {
  @Input() doudounne!: Doudounne;
}
