// Import des hooks React :
// - useState pour gérer l’état local
// - useEffect pour effectuer des actions au montage du composant (comme un appel API)
import { useState, useEffect } from 'react';

// Import d’une fonction personnalisée pour faire un appel API (peut utiliser fetch ou axios en interne)
import fetchData from '../../../../api/fetchData';

// Import des types TypeScript pour typer les données reçues
import { Product, ProductsData } from '../../../../@types/products';

function ProductsList() {
  // Déclaration d'un state "products", initialisé à un tableau vide
  // Le type Product[] indique que c’est un tableau d’objets "Product"
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect s’exécute après le rendu initial du composant
  // Le tableau vide [] signifie que l’effet ne s’exécute qu’une seule fois (comme componentDidMount)
  useEffect(() => {
    // Appel de la fonction fetchData pour récupérer les données depuis l’endpoint "/products"
    // On indique à TypeScript que la réponse aura la forme de "ProductsData"
    fetchData<ProductsData>('/products')
      .then((data) => {
        // Une fois les données reçues, on met à jour le state avec les produits récupérés
        setProducts(data.products);
      })
      .catch((error) => {
        // En cas d’erreur (ex : problème réseau, serveur…), on affiche l’erreur dans la console
        console.error(error);
      });
  }, []);

  // Rendu du composant
  return (
    <div className="product-list">
      {/* Affichage des produits sous forme de JSON formaté, utile pour le debug */}
      <pre>{JSON.stringify(products, null, 4)}</pre>
    </div>
  );
}

export default ProductsList; // Export du composant pour l'utiliser ailleurs dans l'application
