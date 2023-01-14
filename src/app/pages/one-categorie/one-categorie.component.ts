import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item, ITEMS } from 'src/app/mocks/one-categorie.mock';

// Catégories de produits des Top-catégories ()

@Component({
  selector: 'app-one-categorie',
  templateUrl: './one-categorie.component.html',
  styleUrls: ['./one-categorie.component.css'],
})
export class OneCategorieComponent {
  items: Item[] = ITEMS;
  item?: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router
    ) {}

    ngOnInit() {
      this.getCategory();
      // Je récupère en console les infos de mon objet, c'est ok
      console.log(this.item?.image);
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
}
