import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-barre-menu-actions',
  templateUrl: './barre-menu-actions.component.html',
  styleUrls: ['./barre-menu-actions.component.css'],
})
export class BarreMenuActionsComponent {
  // Mouchard sur les éléments HTML via @ViewChild
  // Container du burger
  @ViewChild('burger') burger: ElementRef | undefined;
  // Barres du brurger
  @ViewChild('barre_1') barre_1: ElementRef | undefined;
  @ViewChild('barre_2') barre_2: ElementRef | undefined;
  @ViewChild('barre_3') barre_3: ElementRef | undefined;
  // Menu entrant et sorant
  @ViewChild('nav') nav: ElementRef | undefined;

  burgerSwitch() {
    //J'ai bien récupéré tous mes éléments html au click
    console.log('cliqué !!!');
    console.log('navigation ', this.nav)
    console.log('barre1 ', this.barre_1)
    console.log('barre2 ', this.barre_2)
    console.log('barre3 ', this.barre_3)
    // class "open" qui toggle avec class "close" qui est fixée sur bav__desktop
    this.nav?.nativeElement.classList.toggle('open');
    // Ouverture fermeture du menu
    this.nav?.nativeElement.classList.toggle('close');
    // Animation Burger => croix
    this.barre_1?.nativeElement.classList.toggle('rotate1');
    this.barre_2?.nativeElement.classList.toggle('opacity');
    this.barre_3?.nativeElement.classList.toggle('rotate2');

  }
}
