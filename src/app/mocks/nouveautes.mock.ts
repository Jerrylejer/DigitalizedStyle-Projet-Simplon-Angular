export interface ProductNew {
    id:    number;
    produit:string;
    image: string;
    titre: string;
    icone: string;
    alt: string;
    prix: number;
    unite: string;
    
  }
  export const PRODUCTNEWS: ProductNew [] = [
    
      {
      id: 1,
      produit:"FASHION-SHOW",
      image: "assets/Defiles/defile23.png",
      titre: "Digit-show spring'2023",
      icone: "assets/wishlistCoeur/coeur1.png",
      alt: "coeur",
      prix: 4500,
      unite: "euros"
     },
     
     {
      id: 5,
      produit: "ROBES",
      titre: "Titan dress 4.0 ",
      image: 'assets/categorieFemme/robe.png',
      icone: 'assets/wishlistCoeur/coeur1.png',
      alt: 'coeur',
      prix: 1800,
      unite: "euros"
    },
    
  ]
    
  