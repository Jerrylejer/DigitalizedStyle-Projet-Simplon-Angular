export interface ProductMasque {
    id:    number;
    produit:string;
    image: string;
    imageG1: string;
    imageG2: string;
    imageG3: string;
    imageG4: string;
    imageG5: string;
    titre: string;
    icone: string;
    alt:   string;
    texte: string;
    prix:  number;
    unite: string;
    
}
export const PRODUCTMASQUES: ProductMasque[] = [
    {id: 1,
    produit:"MASQUES ET CASQUES",
    image: "assets/categorieFemme/casque.png",
    imageG1: "mon chemin vers 1",
    imageG2: "mon chemin vers 2",
    imageG3: "mon chemin vers 3",
    imageG4: "mon chemin vers 4",
    imageG5: "mon chemin vers 5",
    titre: "X-Vibes",
    icone: "assets/wishlistCoeur/coeur1.png",
    alt: "coeur",
    texte: "Un texte",
    prix: 2500,
    unite: " euros"
   },
    {
       id: 2,
       produit:"MASQUES ET CASQUES",
       image: "assets/CasqueMasques/solarCasque.png",
       imageG1: "mon chemin vers 6",
       imageG2: "mon chemin vers 7",
       imageG3: "mon chemin vers 8",
       imageG4: "mon chemin vers 9",
       imageG5: "mon chemin vers 10",
       titre:"Solar Casque",
       icone: "assets/wishlistCoeur/coeur1.png",
       alt: "coeur",
       texte: "Un texte",
       prix: 5500,
       unite: " euros"
       },
      {
       id: 3,
       produit:"MASQUES ET CASQUES",
       image: "assets/CasqueMasques/CleanBreathing.png",
       imageG1: "mon chemin vers 11",
       imageG2: "mon chemin vers 12",
       imageG3: "mon chemin vers 13",
       imageG4: "mon chemin vers 14",
       imageG5: "mon chemin vers 15",
       titre:"Clean Breathing",
       icone: "assets/wishlistCoeur/coeur1.png",
       alt: "coeur",
       texte: "Un texte",
       prix: 600,
       unite: " euros"
       },
       {  
       id: 4,
       produit:"MASQUES ET CASQUES",
       image: "assets/CasqueMasques/casqueTitanBreathing.png",
       imageG1: "mon chemin vers 16",
       imageG2: "mon chemin vers 17",
       imageG3: "mon chemin vers 18",
       imageG4: "mon chemin vers 19",
       imageG5: "mon chemin vers 20",
       titre:"Titan Bbreathing",
       icone: "assets/wishlistCoeur/coeur1.png",
       alt: "coeur",
       texte: "Un texte",
       prix: 2300,
       unite: " euros"
       
      },
    {
       id: 5,
       produit:"MASQUES ET CASQUES",
       image: "assets/CasqueMasques/casqueK-0767.png",
       imageG1: "mon chemin vers 21",
       imageG2: "mon chemin vers 22",
       imageG3: "mon chemin vers 23",
       imageG4: "mon chemin vers 24",
       imageG5: "mon chemin vers 25",
       titre:"K-0767",
       icone: "assets/wishlistCoeur/coeur1.png",
       alt: "coeur",
       texte: "Un texte",
       prix: 3600,
       unite: " euros",
       },
    {
       id: 6,
       produit:"MASQUES ET CASQUES",
       image: "assets/CasqueMasques/quantic.png",
       imageG1: "mon chemin vers 26",
       imageG2: "mon chemin vers 27",
       imageG3: "mon chemin vers 28",
       imageG4: "mon chemin vers 29",
       imageG5: "mon chemin vers 30",
       titre:"Quantic",
       icone: "assets/wishlistCoeur/coeur1.png",
       alt: "coeur",
       texte: "Un texte",
       prix: 1990,
       unite: " euros",
    }
 ]

