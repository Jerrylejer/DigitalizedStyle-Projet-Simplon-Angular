import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarreMenuActionsComponent } from './components/barre-menu-actions/barre-menu-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    BarreMenuActionsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
