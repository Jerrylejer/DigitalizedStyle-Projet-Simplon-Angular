import { Component, Input } from '@angular/core';
import { Product } from '../../mocks/product.mock';

@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.component.html',
  styleUrls: ['./produit-card.component.css'],
})
export class ProduitCardComponent {
  @Input() product!: Product;
}
