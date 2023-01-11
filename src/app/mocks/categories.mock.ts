export interface Item_categorie {
    id:    number;
    image: string;
    titre: string;
    
}

export const ITEM_CATEGORIES: Item_categorie[]=[
 {
    id: 1,
    image: "assets/categories/categoriesFemme.png",
    titre: "FEMME"
 }, 
 { 
    id: 2,
    image: "assets/categories/enfant.jpg",
    titre: "ENFANT"
 },
 {  
    id: 3,
    image: "assets/categories/categoriesHomme.png",
    titre: "HOMME"
 }, 
 { 
    id: 4,
    image: "assets/categories/jewellery.jpg",
    titre: "BIJOUX"
 },
 {
    id: 5,
    image: "assets/categories/categoriesAccessoir-masque.png",
    titre: "ACCESSOIRES "
 },
 {
    id: 6,
    image: "assets/categories/categorieNouveaute.png",
    titre: "NOUVEAUTES"
 }]
 
   
