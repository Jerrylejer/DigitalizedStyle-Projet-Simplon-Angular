import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { PaiementComponent } from './pages/paiement/paiement.component';
import { BarreMenuActionsComponent } from './components/barre-menu-actions/barre-menu-actions.component';
import { MenuNavigationComponent } from './components/menu-navigation/menu-navigation.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,

    PaiementComponent,
    BarreMenuActionsComponent,
    MenuNavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
