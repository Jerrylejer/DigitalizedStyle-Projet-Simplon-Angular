import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent {
  //! CARROUSEL DESKTOP (la vue comporte 4 images = 3 slides)
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

  //! CARROUSEL RESPONSIVE (la vue ne comporte qu'une image à chaque fois)
  //? Animation des slider accueil et catégories
  // Je stocke mes éléments du carrousel
  @ViewChild('image1') image1: ElementRef | undefined;
  @ViewChild('image2') image2: ElementRef | undefined;
  @ViewChild('image3') image3: ElementRef | undefined;
  @ViewChild('image4') image4: ElementRef | undefined;
  @ViewChild('image5') image5: ElementRef | undefined;
  @ViewChild('image6') image6: ElementRef | undefined;
  @ViewChild('image7') image7: ElementRef | undefined;
  @ViewChild('image8') image8: ElementRef | undefined;
  @ViewChild('image9') image9: ElementRef | undefined;
  @ViewChild('image10') image10: ElementRef | undefined;
  @ViewChild('image11') image11: ElementRef | undefined;
  @ViewChild('image12') image12: ElementRef | undefined;
  // Je stocke mes éléments de navigation gauche et droite
  @ViewChild('chevronGauche') chevronGauche: ElementRef | undefined;
  @ViewChild('chevronDroit') chevronDroit: ElementRef | undefined;

  // Au click, je veux que ma photo "on" se mette "off" et celle de gauche se mette "on"
  slideG() {
    // Premier cas de figure, je suis sur l'image 12
    if (this.image12?.nativeElement.classList.contains('on')) {
      this.image12?.nativeElement.classList.toggle('on');
      this.image12?.nativeElement.classList.toggle('off');
      this.image11?.nativeElement.classList.toggle('off');
      this.image11?.nativeElement.classList.toggle('on');
    } else if (this.image11?.nativeElement.classList.contains('on')) {
      this.image11?.nativeElement.classList.toggle('on');
      this.image11?.nativeElement.classList.toggle('off');
      this.image10?.nativeElement.classList.toggle('off');
      this.image10?.nativeElement.classList.toggle('on');
    } else if (this.image10?.nativeElement.classList.contains('on')) {
      this.image10?.nativeElement.classList.toggle('on');
      this.image10?.nativeElement.classList.toggle('off');
      this.image9?.nativeElement.classList.toggle('off');
      this.image9?.nativeElement.classList.toggle('on');
    } else if (this.image9?.nativeElement.classList.contains('on')) {
      this.image9?.nativeElement.classList.toggle('on');
      this.image9?.nativeElement.classList.toggle('off');
      this.image8?.nativeElement.classList.toggle('off');
      this.image8?.nativeElement.classList.toggle('on');
    } else if (this.image8?.nativeElement.classList.contains('on')) {
      this.image8?.nativeElement.classList.toggle('on');
      this.image8?.nativeElement.classList.toggle('off');
      this.image7?.nativeElement.classList.toggle('off');
      this.image7?.nativeElement.classList.toggle('on');
    } else if (this.image7?.nativeElement.classList.contains('on')) {
      this.image7?.nativeElement.classList.toggle('on');
      this.image7?.nativeElement.classList.toggle('off');
      this.image6?.nativeElement.classList.toggle('off');
      this.image6?.nativeElement.classList.toggle('on');
    } else if (this.image6?.nativeElement.classList.contains('on')) {
      this.image6?.nativeElement.classList.toggle('on');
      this.image6?.nativeElement.classList.toggle('off');
      this.image5?.nativeElement.classList.toggle('off');
      this.image5?.nativeElement.classList.toggle('on');
    } else if (this.image5?.nativeElement.classList.contains('on')) {
      this.image5?.nativeElement.classList.toggle('on');
      this.image5?.nativeElement.classList.toggle('off');
      this.image4?.nativeElement.classList.toggle('off');
      this.image4?.nativeElement.classList.toggle('on');
    } else if (this.image4?.nativeElement.classList.contains('on')) {
      this.image4?.nativeElement.classList.toggle('on');
      this.image4?.nativeElement.classList.toggle('off');
      this.image3?.nativeElement.classList.toggle('off');
      this.image3?.nativeElement.classList.toggle('on');
    } else if (this.image3?.nativeElement.classList.contains('on')) {
      this.image3?.nativeElement.classList.toggle('on');
      this.image3?.nativeElement.classList.toggle('off');
      this.image2?.nativeElement.classList.toggle('off');
      this.image2?.nativeElement.classList.toggle('on');
    } else if (this.image2?.nativeElement.classList.contains('on')) {
      this.image2?.nativeElement.classList.toggle('on');
      this.image2?.nativeElement.classList.toggle('off');
      this.image1?.nativeElement.classList.toggle('off');
      this.image1?.nativeElement.classList.toggle('on');
    }
  }

  slideD() {
    if (this.image1?.nativeElement.classList.contains('on')) {
      this.image1?.nativeElement.classList.toggle('on');
      this.image1?.nativeElement.classList.toggle('off');
      this.image2?.nativeElement.classList.toggle('off');
      this.image2?.nativeElement.classList.toggle('on');
    } else if (this.image2?.nativeElement.classList.contains('on')) {
      this.image2?.nativeElement.classList.toggle('on');
      this.image2?.nativeElement.classList.toggle('off');
      this.image3?.nativeElement.classList.toggle('off');
      this.image3?.nativeElement.classList.toggle('on');
    } else if (this.image3?.nativeElement.classList.contains('on')) {
      this.image3?.nativeElement.classList.toggle('on');
      this.image3?.nativeElement.classList.toggle('off');
      this.image4?.nativeElement.classList.toggle('off');
      this.image4?.nativeElement.classList.toggle('on');
    } else if (this.image4?.nativeElement.classList.contains('on')) {
      this.image4?.nativeElement.classList.toggle('on');
      this.image4?.nativeElement.classList.toggle('off');
      this.image5?.nativeElement.classList.toggle('off');
      this.image5?.nativeElement.classList.toggle('on');
    } else if (this.image5?.nativeElement.classList.contains('on')) {
      this.image5?.nativeElement.classList.toggle('on');
      this.image5?.nativeElement.classList.toggle('off');
      this.image6?.nativeElement.classList.toggle('off');
      this.image6?.nativeElement.classList.toggle('on');
    } else if (this.image6?.nativeElement.classList.contains('on')) {
      this.image6?.nativeElement.classList.toggle('on');
      this.image6?.nativeElement.classList.toggle('off');
      this.image7?.nativeElement.classList.toggle('off');
      this.image7?.nativeElement.classList.toggle('on');
    } else if (this.image7?.nativeElement.classList.contains('on')) {
      this.image7?.nativeElement.classList.toggle('on');
      this.image7?.nativeElement.classList.toggle('off');
      this.image8?.nativeElement.classList.toggle('off');
      this.image8?.nativeElement.classList.toggle('on');
    } else if (this.image8?.nativeElement.classList.contains('on')) {
      this.image8?.nativeElement.classList.toggle('on');
      this.image8?.nativeElement.classList.toggle('off');
      this.image9?.nativeElement.classList.toggle('off');
      this.image9?.nativeElement.classList.toggle('on');
    } else if (this.image9?.nativeElement.classList.contains('on')) {
      this.image9?.nativeElement.classList.toggle('on');
      this.image9?.nativeElement.classList.toggle('off');
      this.image10?.nativeElement.classList.toggle('off');
      this.image10?.nativeElement.classList.toggle('on');
    } else if (this.image10?.nativeElement.classList.contains('on')) {
      this.image10?.nativeElement.classList.toggle('on');
      this.image10?.nativeElement.classList.toggle('off');
      this.image11?.nativeElement.classList.toggle('off');
      this.image11?.nativeElement.classList.toggle('on');
    } else if (this.image11?.nativeElement.classList.contains('on')) {
      this.image11?.nativeElement.classList.toggle('on');
      this.image11?.nativeElement.classList.toggle('off');
      this.image12?.nativeElement.classList.toggle('off');
      this.image12?.nativeElement.classList.toggle('on');
    }
  }
}
