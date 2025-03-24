// Définition d’un type TypeScript appelé "Endpoint"
// Il représente une chaîne de caractères commençant par un "/" suivie de n’importe quel texte
// Exemple valide : "/products", "/users/42"
type Endpoint = `/${string}`;

// Fonction générique exportée par défaut, appelée "fetchData"
// Elle prend en paramètre un endpoint (type Endpoint), et retourne une promesse du type T
// T est un type que l’on ne connaît pas encore au moment d’écrire la fonction, mais qu’on va spécifier plus tard au moment de l’utiliser.
export default async function fetchData<T>(endpoint: Endpoint) {
  // Appel à l’API en utilisant fetch
  // L’URL complète est construite à partir de la variable d’environnement VITE_API_URL
  // Exemple : si VITE_API_URL = "http://localhost:3000", l’URL devient "http://localhost:3000/products"
  const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`);

  // Si la réponse n’est pas "OK" (ex : erreur 404, 500…), on déclenche une erreur
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  // Si tout va bien, on retourne le JSON de la réponse, typé comme T
  // Cela permet d’avoir un retour bien typé côté TypeScript (ex : tableau de produits)
  return await response.json() as T;
}
