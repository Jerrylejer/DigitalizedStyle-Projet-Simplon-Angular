import { Component } from '@angular/core';
import { ProductMasque, PRODUCTMASQUES } from 'src/app/mocks/masqueCasque.mock';
import { ProductNew, PRODUCTNEWS } from 'src/app/mocks/nouveautes.mock';
import { ITEMPRODUCTDETAILS, Item_productdetails } from 'src/app/mocks/product-details.mock';

@Component({
  selector: 'app-nouveautes',
  templateUrl: './nouveautes.component.html',
  styleUrls: ['./nouveautes.component.css']
})
export class NouveautesComponent {

  productNew: ProductNew[] = PRODUCTNEWS;
  item_productdetails: Item_productdetails[] = ITEMPRODUCTDETAILS;
  productMasque: ProductMasque[] = PRODUCTMASQUES;
  
  titreToDisplay='NOUVEAUTES';
}
