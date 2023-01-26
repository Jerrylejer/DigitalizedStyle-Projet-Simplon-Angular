export interface ProductMasque {
    id:    number;
    produit:string;
    image: string;
    titre: string;
    icone: string;
    alt:   string;
    prix:  number;
    unite: string;
    
}
export const PRODUCTMASQUES: ProductMasque[] = [
    {id: 1,
    produit:"MASQUES ET CASQUES",
    image: "assets/categorieFemme/casque.png",
    titre: "X-Vibes",
    icone: "assets/wishlistCoeur/coeur1.png",
    alt: "coeur",
    prix: 2500,
    unite: "euros"
   },
    {
       id: 2,
       produit:"MASQUES ET CASQUES",
       image: "assets/CasqueMasques/solarCasque.png",
       titre:"Solar Casque",
       icone: "assets/wishlistCoeur/coeur1.png",
       alt: "coeur",
       prix: 5500,
       unite: "euros"
       },
      {
       id: 3,
       produit:"MASQUES ET CASQUES",
       image: "assets/CasqueMasques/CleanBreathing.png",
       titre:"Clean Breathing",
       icone: "assets/wishlistCoeur/coeur1.png",
       alt: "coeur",
       prix: 600,
       unite: "euros"
       },
       {  
       id: 4,
       produit:"MASQUES ET CASQUES",
       image: "assets/CasqueMasques/casqueTitanBreathing.png",
       titre:"Titan Bbreathing",
       icone: "assets/wishlistCoeur/coeur1.png",
       alt: "coeur",
       prix: 2300,
       unite: "euros"
       
      },
    {
       id: 5,
       produit:"MASQUES ET CASQUES",
       image: "assets/CasqueMasques/casqueK-0767.png",
       titre:"K-0767",
       icone: "assets/wishlistCoeur/coeur1.png",
       alt: "coeur",
       prix: 3600,
       unite: "euros",
       },
    {
       id: 6,
       produit:"MASQUES ET CASQUES",
       image: "assets/CasqueMasques/quantic.png",
       titre:"Quantic",
       icone: "assets/wishlistCoeur/coeur1.png",
       alt: "coeur",
       prix: 1990,
       unite: "euros",
    }
 ]

