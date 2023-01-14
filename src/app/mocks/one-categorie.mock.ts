export interface Item {
  id: number;
  categorie: string;
  image: string;
  titre: string;
  icone: string;
  description: string;
}
export const ITEMS: Item[] = [
  {
    id: 1,
    categorie: 'FEMMES',
    image: 'assets/categorieFemme/casque.jpg',
    titre: 'MASQUES ET CASQUES',
    icone: 'assets/wishlistCoeur/coeur1.png',
    description: 'coeur',
  },
  {
    id: 2,
    categorie: 'FEMMES',
    image: 'assets/Doudounnes/doudounneVerte.png',
    titre: 'DOUDOUNNES',
    icone: 'assets/wishlistCoeur/coeur1.png',
    description: 'coeur',
  },
  {
    id: 3,
    categorie: 'FEMMES',
    image: 'assets/categorieFemme/robe.jpg',
    titre: 'ROBES',
    icone: 'assets/wishlistCoeur/coeur1.png',
    description: 'coeur',
  },
  {
    id: 4,
    categorie: 'FEMMES',
    image: 'assets/categorieFemme/bottes.jpg',
    titre: 'SOULIERS',
    icone: 'assets/wishlistCoeur/coeur1.png',
    description: 'coeur',
  },
  {
    id: 5,
    categorie: 'FEMMES',
    image: 'assets/categorieFemme/top.jpg',
    titre: 'TOP ET T-SHIRT',
    icone: 'assets/wishlistCoeur/coeur1.png',
    description: 'coeur',
  },
  {
    id: 6,
    categorie: 'FEMMES',
    image: 'assets/categorieFemme/pantalon.png',
    titre: 'PANTALONS',
    icone: 'assets/wishlistCoeur/coeur1.png',
    description: 'coeur',
  },
];
