export interface Product {
    image: string;
    titre: string;
}
export interface Item {
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