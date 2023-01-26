import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PaiementComponent } from './pages/paiement/paiement.component';
import { PanierComponent } from './components/panier/panier.component';
import { OffrirComponent } from './components/offrir/offrir.component';
import { LivraisonComponent } from './components/livraison/livraison.component';
import { MoyenPaiementComponent } from './components/moyen-paiement/moyen-paiement.component';
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


import { OneCategorieCardComponent } from './components/one-categorie-card/one-categorie-card.component';
import { OneProductCardComponent } from './components/one-product-card/one-product-card.component';

import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CategoriesPrincipalesComponent } from './components/categories-principales/categories-principales.component';
import { ModuleTopHomeComponent } from './components/module-top-home/module-top-home.component';
import { FavorisComponent } from './pages/favoris/favoris.component';
import { CompteClientComponent } from './pages/compte-client/compte-client.component';
import { CategoriesCardComponent } from './components/categories-card/categories-card.component';
import { BarreVioletteComponent } from './components/barre-violette/barre-violette.component';
import { GalerieProduitComponent } from './components/galerie-produit/galerie-produit.component';
import { ProductConfigComponent } from './components/product-config/product-config.component';

import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NouveautesComponent } from './pages/nouveautes/nouveautes.component';
import { MasqueCasquesComponent } from './pages/masque-casques/masque-casques.component';
import { NouveauteOneCategorieComponent } from './components/nouveaute-one-categorie/nouveaute-one-categorie.component';
import { MasqueCasquesCardComponent } from './components/masque-casques-card/masque-casques-card.component';
import { HistoryViewsComponent } from './components/history-views/history-views.component';


@NgModule({
  declarations: [
    AppComponent,
    PaiementComponent,
    PanierComponent,
    OffrirComponent,
    LivraisonComponent,
    MoyenPaiementComponent,
    BarreMenuActionsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    OneCategorieComponent,
    ProductListComponent,
    OneProductComponent,
    NotFoundComponent,
    
    OneCategorieCardComponent,
    OneProductCardComponent,
    CarrouselComponent,
    NewsletterComponent,
    CategoriesPrincipalesComponent,
    ModuleTopHomeComponent,
    FavorisComponent,
    CompteClientComponent,
    CategoriesCardComponent,
    BarreVioletteComponent,
    GalerieProduitComponent,
    ProductConfigComponent,
    ModalComponent,
    NouveautesComponent,
    MasqueCasquesComponent,
    NouveauteOneCategorieComponent,
    MasqueCasquesCardComponent,
    HistoryViewsComponent,



    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatDialogModule,
    AngularToastifyModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})

export class AppModule { }
