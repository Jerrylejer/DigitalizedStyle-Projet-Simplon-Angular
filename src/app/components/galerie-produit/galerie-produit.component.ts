import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITEMPRODUCTDETAILS, Item_productdetails } from 'src/app/mocks/product-details.mock';

@Component({
  selector: 'app-galerie-produit',
  templateUrl: './galerie-produit.component.html',
  styleUrls: ['./galerie-produit.component.css']
})
export class GalerieProduitComponent {
  // Une prop qui récupèrera les produits du mock
  galerieItems: Item_productdetails[] = ITEMPRODUCTDETAILS; 
  // pour récupérer le mock qui contiendra les photos carrées de chaque doudoune
  galerieItem?: Item_productdetails;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    // Je récupère le params de l'url
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // Je rapproche mon iD d'url à mon mock
    const foundProduct = this.galerieItems.find((singleItem) => singleItem.id === id);
    if (foundProduct) {
      this.galerieItem = foundProduct;
      console.log(foundProduct);
    } else {
      this.router.navigate(['/not-found']);
    }
  }
  
}