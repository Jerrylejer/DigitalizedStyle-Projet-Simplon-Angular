export interface ItemProduct {
  id: number;
  image: string;
  titre: string;
  icone: string;
  description: string;
}

export interface Item {
  id: number;
  categorie: string;
  items: ItemProduct[];
}

export const ITEMS: Item[] = [
  {
    id: 1,
    categorie: 'FEMMES',
    items: [
      {
        id: 1,
        image: 'assets/categorieFemme/casque.jpg',
        titre: 'MASQUES ET CASQUES',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 2,
        image: 'assets/Doudounnes/doudounneVerte.png',
        titre: 'DOUDOUNNES',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 3,
        image: 'assets/categorieFemme/robe.jpg',
        titre: 'ROBES',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 4,
        image: 'assets/categorieFemme/bottes.jpg',
        titre: 'SOULIERS',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 5,
        image: 'assets/categorieFemme/top.jpg',
        titre: 'TOP ET T-SHIRT',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 6,
        image: 'assets/categorieFemme/pantalon.png',
        titre: 'PANTALONS',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },
    ],
  },
  {
    id: 2,
    categorie: 'ENFANTS',
    items: [
      {
        id: 1,
        image: '',
        titre: 'GAMME ENFANT 1',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 2,
        image: '',
        titre: 'GAMME ENFANT 2',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 3,
        image: '',
        titre: 'GAMME ENFANTS 3',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 4,
        image: '',
        titre: 'GAMME ENFANTS 4',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 5,
        image: '',
        titre: 'GAMME ENFANTS 5',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 6,
        image: '',
        titre: 'GAMME ENFANTS 6',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },
    ],
  },
  {
    id: 3,
    categorie: 'HOMMES',
    items: [
      {
        id: 1,
        image: '',
        titre: 'GAMME HOMMES 1',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 2,
        image: '',
        titre: 'GAMME HOMMES 2',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 3,
        image: '',
        titre: 'GAMME HOMMES 3',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 4,
        image: '',
        titre: 'GAMME HOMMES 4',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 5,
        image: '',
        titre: 'GAMME HOMMES 5',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id:6,
        image: '',
        titre: 'GAMME HOMMES 6',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },
    ],
  },
  {
    id: 4,
    categorie: 'BIJOUX',
    items: [
      {
        id: 1,
        image: '',
        titre: 'GAMME BIJOUX 1',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 2,
        image: '',
        titre: 'GAMME BIJOUX 2',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 3,
        image: '',
        titre: 'GAMME BIJOUX 3',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 4,
        image: '',
        titre: 'GAMME BIJOUX 4',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 5,
        image: '',
        titre: 'GAMME BIJOUX 5',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 6,
        image: '',
        titre: 'GAMME BIJOUX 6',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },
    ],
  },
  {
    id: 5,
    categorie: 'ACCESSOIRES',
    items: [
      {
        id: 1,
        image: '',
        titre: 'GAMME ACCESSOIRE 1',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 2,
        image: '',
        titre: 'GAMME ACCESSOIRE 2',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 3,
        image: '',
        titre: 'GAMME ACCESSOIRE 3',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 4,
        image: '',
        titre: 'GAMME ACCESSOIRE 4',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 5,
        image: '',
        titre: 'GAMME ACCESSOIRE 5',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 6,
        image: '',
        titre: 'GAMME ACCESSOIRE 6',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },
    ],
  },
  {
    id: 6,
    categorie: 'NOUVEAUTES',
    items: [
      {
        id: 1,
        image: '',
        titre: 'GAMME NOUVEAUTES 1',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 2,
        image: '',
        titre: 'GAMME NOUVEAUTES 2',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 3,
        image: '',
        titre: 'GAMME NOUVEAUTES 3',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 4,
        image: '',
        titre: 'GAMME NOUVEAUTES 4',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 5,
        image: '',
        titre: 'GAMME NOUVEAUTES 5',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },

      {
        id: 6,
        image: '',
        titre: 'GAMME NOUVEAUTES 6',
        icone: 'assets/wishlistCoeur/coeur1.png',
        description: 'coeur',
      },
    ],
  },
];
