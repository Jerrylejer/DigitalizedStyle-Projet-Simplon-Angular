import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { PaiementComponent } from './pages/paiement/paiement.component';
import { BarreMenuActionsComponent } from './components/barre-menu-actions/barre-menu-actions.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OneCategorieComponent } from './pages/one-categorie/one-categorie.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { OneProductComponent } from './pages/one-product/one-product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';



@NgModule({
  declarations: [
    AppComponent,
    PaiementComponent,
    BarreMenuActionsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    OneCategorieComponent,
    ProductListComponent,
    OneProductComponent,
    NotFoundComponent,
    CarrouselComponent,
    NewsletterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
