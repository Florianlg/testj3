// Ce fichier permet de définir précisément la forme des données que ton application va manipuler — 
// ici, les produits et la réponse de l’API.
// Déclaration d’une interface TypeScript "Product"
// Elle définit la structure attendue pour un objet représentant un produit
export interface Product {
  id: number;                   // Identifiant unique du produit
  title: string;                // Titre du produit
  description: string;          // Description textuelle
  price: number;                // Prix en nombre (ex : 49.99)
  discountPercentage: number;  // Pourcentage de réduction appliqué
  rating: number;              // Note moyenne des utilisateurs (ex : 4.2)
  stock: number;               // Quantité disponible en stock
  brand: string;               // Marque du produit (ex : "Apple")
  category: string;            // Catégorie (ex : "smartphones", "laptops", etc.)
  thumbnail: string;           // URL de l’image principale (vignette)
  images: string[];            // Tableau de toutes les URL d’images du produit
}


// Déclaration d’une seconde interface "ProductsData"
// Elle correspond à la structure globale des données retournées par l’API
export interface ProductsData {
  products: Product[];  // Tableau de produits (chacun respecte la structure Product)
  total: number;        // Nombre total de produits disponibles dans la base
  skip: number;         // Nombre de produits sautés (utile pour la pagination)
  limit: number;        // Limite de produits renvoyés par page (ex : 20 par appel)
}

