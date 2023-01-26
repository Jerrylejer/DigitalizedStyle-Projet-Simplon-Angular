import { Component, Input } from '@angular/core';
import { ProductMasque } from 'src/app/mocks/masqueCasque.mock';

@Component({
  selector: 'app-masque-casques-card',
  templateUrl: './masque-casques-card.component.html',
  styleUrls: ['./masque-casques-card.component.css']
})
export class MasqueCasquesCardComponent {
  @Input() productMasque!: ProductMasque;
}
