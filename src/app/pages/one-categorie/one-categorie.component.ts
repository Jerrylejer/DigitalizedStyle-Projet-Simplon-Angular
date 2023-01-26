import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item, ITEMS } from 'src/app/mocks/products-list.mock';

// Catégories de produits des Top-catégories ()
@Component({
  selector: 'app-one-categorie',
  templateUrl: './one-categorie.component.html',
  styleUrls: ['./one-categorie.component.css'],
})
export class OneCategorieComponent {
  // ----- MANON = Ici on change pour récupérer les bons prouits
  categorie?: Item;
  // Mes gammes de produits pour les afficher
  productsRanges: Item[] = ITEMS;
  productsRange?: Item;
  
 
  
   constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    ) {}

    ngOnInit() {
      // ----- MANON = this.activatedRoute.params est un observable, en faisant ça tu est à l'écoute des changement et ta page se met à jour alors qu'avant ça le faisait pas
      this.activatedRoute.params.subscribe(routeParams => {
        this.getCategory();
        // this.getProductsRanges();
      });
      // Je récupère en console les infos du titre de la catégorie
      console.log(this.categorie);
    }

    getCategory() {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      console.log(ITEMS);
      const foundCategory = ITEMS.find((singleCategory) => singleCategory.id === id);
      console.log(foundCategory);
      if(foundCategory) {
        this.categorie = foundCategory;
      } else{
        this.router.navigate(["/not-found"]);
      }
    }
  }

