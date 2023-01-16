import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Item_categorie, ITEM_CATEGORIES} from 'src/app/mocks/categories.mock'
import { Item, ITEMS } from 'src/app/mocks/products-list.mock';

// Catégories de produits des Top-catégories ()
@Component({
  selector: 'app-one-categorie',
  templateUrl: './one-categorie.component.html',
  styleUrls: ['./one-categorie.component.css'],
})
export class OneCategorieComponent {
  // ----- MANON = Ici on chnge pour récupérer les bon prouits
  items: Item_categorie[] = ITEM_CATEGORIES;
  item?: Item_categorie;
  // Mes listes de produits
  itemLists:Item[] = ITEMS;
  itemList?: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router
    ) {}

    ngOnInit() {
      // ----- MANON = this.activatedRoute.params est un observable, en faisant ça tu est à l'écoute des changement et ta page se met à jour alors qu'avant ça le faisait pas
      this.activatedRoute.params.subscribe(routeParams => {
        this.getCategory();
        this.getProducts();
      });
      // Je récupère en console les infos du titre de la catégorie
      console.log(this.item?.titre);
      // Je récupère en console les infos des titres des gammes de produits
      // console.log(this.itemList?.items[1])
      console.log(this.itemList?.titre)
    }

    getCategory() {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      const foundCategory = this.items.find((singleCategory) => singleCategory.id === id);
      if(foundCategory) {
        this.item = foundCategory;
      } else{
        this.router.navigate(["/not-found"]);
      }
    }

    getProducts() {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      const foundProducts = this.itemLists.find((productsList) => productsList.id === id);
      if(foundProducts) {
        this.itemList = foundProducts;
      } else{
        this.router.navigate(["/not-found"]);
      }
    }
}
