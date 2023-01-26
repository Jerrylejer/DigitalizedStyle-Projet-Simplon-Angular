import { Component, Input } from '@angular/core';
import { ProductNew } from 'src/app/mocks/nouveautes.mock';

@Component({
  selector: 'app-nouveaute-one-categorie',
  templateUrl: './nouveaute-one-categorie.component.html',
  styleUrls: ['./nouveaute-one-categorie.component.css']
})
export class NouveauteOneCategorieComponent {
  @Input() productNew!: ProductNew;
}
