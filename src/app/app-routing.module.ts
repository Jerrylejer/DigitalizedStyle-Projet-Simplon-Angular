import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
//Import des futures pages

// Définition du paths et component dans le tableau
const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
