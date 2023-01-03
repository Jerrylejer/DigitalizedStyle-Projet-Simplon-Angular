import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarreMenuActionsComponent } from './components/barre-menu-actions/barre-menu-actions.component';
import { MenuNavigationComponent } from './components/menu-navigation/menu-navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BarreMenuActionsComponent,
    MenuNavigationComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
