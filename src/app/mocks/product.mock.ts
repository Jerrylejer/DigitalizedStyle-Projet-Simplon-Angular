export interface Product {
    image: string;
    titre: string;
}
export interface Item {
   image: string;
   titre: string;
}
export interface Picture {
   image: string;
   titre: string;
}
export const PRODUCTS: Product[]=[
 {
    image: "assets/categories/categoriesFemme.png",
    titre:"FEMME"
 }, 
 {
    image: "assets/categories/enfant.jpg",
    titre:"ENFANT"
 },
 {
    image: "assets/categories/categoriesHomme.png",
    titre:"HOMME"
 }, 
 {
    image: "assets/categories/jewellery.jpg",
    titre:"BIJOUX"
 },
 {
    image: "assets/categories/categoriesAccessoir-masque.png",
    titre:"ACCESSOIRES "
 },
 {
    image: "assets/categories/categorieNouveaute.png",
    titre:"NOUVEAUTES"
 }]
 
   export const ITEMS: Item[] = [
   {
      image: "assets/categorieFemme/casque.jpg",
      titre: "MASQUES ET CASQUES"
   },
   {
      image: "assets/Doudounnes/doudounneVerte.png",
      titre:"DOUDOUNNES"
   },
   {
      image: "assets/categorieFemme/robe.jpg",
      titre:"ROBES"
   },
   {
      image: "assets/categorieFemme/bottes.jpg",
      titre:"SOULIERS"
   },
   {
      image: "assets/categorieFemme/top.jpg",
      titre:"TOP ET T-SHIRT"
   },
   {
      image: "assets/categorieFemme/pantalon.png",
      titre:"PANTALONS"
   }
]
export const PICTURE: Picture[] = [
   {
      image: "assets/Doudounnes/doudounne2.jpg",
      titre: "Digit-dunne 4.0"
   },
   {
      image: "assets/Doudounnes/doudounneVerte.png",
      titre:"Meta conect-dunne"
   },
   {
      image: "assets/Doudounnes/doudounne4.jpg",
      titre:"Space-dunne"
   },
   {
      image: "assets/Doudounnes/doudounneWhite.jpg",
      titre:"White-numdunne 4.0"
   },
   {
      image: "assets/Doudounnes/doudounne5.jpg",
      titre:"Space connect"
   },
   {
      image: "assets/Doudounnes/doudounne3.png",
      titre:"car-dunne connect"
   }
]