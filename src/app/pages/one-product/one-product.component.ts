import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITEMPRODUCTLISTS, Item_productlist } from 'src/app/mocks/product-list.mock';


@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent {
  
  items: Item_productlist[] = ITEMPRODUCTLISTS;
  item?: Item_productlist;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router
    ) {}

    ngOnInit() {
      this.getProduct();
      // Je récupère en console les infos de mon objet, c'est ok
      console.log(this.item?.image);
    }

    getProduct() {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      const foundProduct = this.items.find((singleItem) => singleItem.id === id);
      if(foundProduct) {
        this.item = foundProduct;
      } else{
        this.router.navigate(["/not-found"]);
      }
    }
}
