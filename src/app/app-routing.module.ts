import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
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
    path:"categories",
    component:CategoriesComponent
  },
  {
    path:"categories/:id",
    component:OneCategorieComponent
  },
  {
    path:"products",
    component:ProductListComponent
  },
  {
    path:"products/:id",
    component:OneProductComponent
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


