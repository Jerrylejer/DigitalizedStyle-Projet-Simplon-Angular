export interface ProductNew {
    id:    number;
    produit:string;
    image: string;
    titre: string;
    icone: string;
    alt: string;
    isNew: boolean;
    prix: number;
    unite: string;
    
  }
  export const PRODUCTNEWS: ProductNew [] = [
    
      {
      id: 1,
      produit:"MASQUES ET CASQUES",
      image: "assets/categorieFemme/casque.png",
      titre: "X-Vibes",
      icone: "assets/wishlistCoeur/coeur1.png",
      alt: "coeur",
      isNew: true,
      prix: 2500,
      unite: "euros"
     },
     
     {
      id: 5,
      produit: "ROBES",
      titre: "Titan dress 4.0 ",
      image: 'assets/categorieFemme/robe.png',
      icone: 'assets/wishlistCoeur/coeur1.png',
      alt: 'coeur',
      isNew: true,
       prix: 1800,
       unite: "euros"
    },
    
  ]
    
  