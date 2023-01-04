import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent {
  // CARROUSEL desktop 4 images pour slider accueil et catégories
  // Je stocke mes éléments 1er carrousel, second carrousel, troisième carrousel
  @ViewChild('carrousel1') carrousel1: ElementRef | undefined;
  @ViewChild('carrousel2') carrousel2: ElementRef | undefined;
  @ViewChild('carrousel3') carrousel3: ElementRef | undefined;
  // Je stocke mes éléments de navigation gauche et droite
  @ViewChild('chevronG') chevronG: ElementRef | undefined;
  @ViewChild('chevronD') chevronD: ElementRef | undefined;
  // Les fonctions precedent et suivant sont (click) dans le html
  precedent() {
    // Je récupère bien mes 3 carrousels
    console.log(this.carrousel1);
    console.log(this.carrousel2);
    console.log(this.carrousel3);
    // Au click, je veux que mon carrousel2 "on" se mette "off", carrousel1 se mette "on"
    // Premier cas de figure, je suis sur le carrousel2
    if (this.carrousel2?.nativeElement.classList.contains('on')) {
      // Disparition carrousel 2
      this.carrousel2?.nativeElement.classList.toggle('on');
      this.carrousel2?.nativeElement.classList.toggle('off');
      // Apparition carrousel 1
      this.carrousel1?.nativeElement.classList.toggle('off');
      this.carrousel1?.nativeElement.classList.toggle('on');
    } else if (this.carrousel3?.nativeElement.classList.contains('on')) {
      // Disparition carrousel 3
      this.carrousel3?.nativeElement.classList.toggle('on');
      this.carrousel3?.nativeElement.classList.toggle('off');
      // Apparition carrousel 2
      this.carrousel2?.nativeElement.classList.toggle('off');
      this.carrousel2?.nativeElement.classList.toggle('on');
    }
  }

  suivant() {
    // Je récupère bien mes 3 carrousels
    console.log(this.carrousel1);
    console.log(this.carrousel2);
    console.log(this.carrousel3);
    if (this.carrousel2?.nativeElement.classList.contains('on')) {
      // Disparition carrousel 2
      this.carrousel2?.nativeElement.classList.toggle('on');
      this.carrousel2?.nativeElement.classList.toggle('off');
      // Apparition carrousel 3
      this.carrousel3?.nativeElement.classList.toggle('off');
      this.carrousel3?.nativeElement.classList.toggle('on');
    } else if (this.carrousel1?.nativeElement.classList.contains('on')) {
      // Disparition carrousel 3
      this.carrousel1?.nativeElement.classList.toggle('on');
      this.carrousel1?.nativeElement.classList.toggle('off');
      // Apparition carrousel 2
      this.carrousel2?.nativeElement.classList.toggle('off');
      this.carrousel2?.nativeElement.classList.toggle('on');
    }
  }
}
