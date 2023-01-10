import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { PanierComponent } from './components/panier/panier.component';
import { OffrirComponent } from './components/offrir/offrir.component';
import { LivraisonComponent } from './components/livraison/livraison.component';
import { MoyenPaiementComponent } from './components/moyen-paiement/moyen-paiement.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiementComponent,
    PanierComponent,
    OffrirComponent,
    LivraisonComponent,
    MoyenPaiementComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
