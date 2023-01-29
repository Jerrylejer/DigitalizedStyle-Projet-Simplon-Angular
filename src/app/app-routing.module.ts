import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CategoriesComponent } from './pages/categories/categories.component';
import { CompteClientComponent } from './pages/compte-client/compte-client.component';
import { FavorisComponent } from './pages/favoris/favoris.component';
import { HomeComponent } from './pages/home/home.component';
import { MasqueCasquesComponent } from './pages/masque-casques/masque-casques.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NouveautesComponent } from './pages/nouveautes/nouveautes.component';
import { OneCategorieComponent } from './pages/one-categorie/one-categorie.component';
import { OneProductComponent } from './pages/one-product/one-product.component';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
//Import des futures pages

// Définition du paths et component dans le tableau
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    // Pour se diriger sur Femmes, enfants, hommes, bijoux, accassoires, DS
    // path:"categories/:id/products/:id",
    path:"categories/:id",
    component:OneCategorieComponent
  },
  {
    // Page des catégories
    path:"categories",
    component:CategoriesComponent
  },
  {
    path: 'Masques et casques',
    component: MasqueCasquesComponent,
  },
  {
    path: 'nouveautes',
    component: NouveautesComponent, 
  },
  
  {
    path:"compte",
    component:CompteClientComponent
  },
  {
    path:"favoris",
    component:FavorisComponent
  },
  {
    // Une Doudoune spécifique
    path:"products/product/:id",
    component:OneProductComponent
  },
  {
    // Pour se diriger sur les Doudounes
    path:"products/:id",
    component:ProductListComponent
  },
  {
    path:"paiement",
    component:PaiementComponent
  },
  {
    path:"not-found",
    component:NotFoundComponent
  },
  {
    path:"**", 
    redirectTo: "not-found"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}


