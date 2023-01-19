type AttributeTypes = 'rouge'|'bleu'|'vert'|'indefini';

export interface Item_productdetails {
    id:    number;
    image: string;
    titre: string;
    icone: string;
    description: string;
    texte: string;
    prix: number;
    attributeTypes: AttributeTypes;
 }
 export const ITEMPRODUCTDETAILS: Item_productdetails[] = [
{

    id: 20,
    image: "assets/Doudounnes/doudounneVerte.png",
    titre:"Meta conect-dunne",
    icone: "assets/wishlistCoeur/coeur1.png",
    description: "coeur",
    texte: "Nos super doudounes de la marque DigitaliseStyle viennent de débarquer dans votre boutique online.C’est un nouveau concept innovant.Cette doudoune est fabriqué à partir de bouteilles en plastiques recyclés.La doudoune possède un Qr Code afin d’obtenir son certificat d’authenticité. Le zippée est étanche et monte jusqu’en haut de la capuche. Cette doudoune protège du vent, elle est très légère à porter, confortable puis tient chaud. La matière est très agréable à porter. Cette doudoune sera parfaite pour des sorties en extérieur, des balades en forêt ou encore pour aller au travail ou faire du ski et même faire de la moto. Il vous protégera du froid et du vent glacial durant l'hiver.",
    prix: 2200,
    attributeTypes:"rouge",
    
 },
 {
    id: 21,
    image: "assets/Doudounnes/doudounneVerte.png",
    titre:"Meta conect-dunne",
    icone: "assets/wishlistCoeur/coeur1.png",
    description: "coeur",
    texte: "Nos super doudounes de la marque DigitaliseStyle viennent de débarquer dans votre boutique online.C’est un nouveau concept innovant.Cette doudoune est fabriqué à partir de bouteilles en plastiques recyclés.La doudoune possède un Qr Code afin d’obtenir son certificat d’authenticité. Le zippée est étanche et monte jusqu’en haut de la capuche. Cette doudoune protège du vent, elle est très légère à porter, confortable puis tient chaud. La matière est très agréable à porter. Cette doudoune sera parfaite pour des sorties en extérieur, des balades en forêt ou encore pour aller au travail ou faire du ski et même faire de la moto. Il vous protégera du froid et du vent glacial durant l'hiver.",
    prix: 2200,
    attributeTypes:"bleu"
 },
 {
     id: 22,
     image: "assets/Doudounnes/doudounne4.jpg",
     titre:"Space-dunne",
     icone: "assets/wishlistCoeur/coeur1.png",
     description: "coeur",
     texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     prix: 1800,
     attributeTypes:"indefini"
  
  }]