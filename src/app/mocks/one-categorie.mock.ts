export interface Item {
    id:    number;
    image: string;
    titre: string;
 }
 export const ITEMS: Item[] = [
    {  id: 1,
       image: "assets/categorieFemme/casque.jpg",
       titre: "MASQUES ET CASQUES"
    },
    {  id: 2,
       image: "assets/Doudounnes/doudounneVerte.png",
       titre:"DOUDOUNNES"
    },
    {  id: 3,
       image: "assets/categorieFemme/robe.jpg",
       titre:"ROBES"
    },
    {  id: 4,
       image: "assets/categorieFemme/bottes.jpg",
       titre:"SOULIERS"
    },
    {
       id: 5,
       image: "assets/categorieFemme/top.jpg",
       titre:"TOP ET T-SHIRT"
    },
    {
       id: 6,
       image: "assets/categorieFemme/pantalon.png",
       titre:"PANTALONS"
    }
 ]