# Nord Aventure

Site démo — boutique fictive d'équipement de pêche pour le Nord québécois.

## Stack

- HTML / CSS / JavaScript vanille
- Aucune dépendance npm, aucun build
- Polices : Google Fonts (Inter, Big Shoulders Display)
- Icônes : Lucide via CDN
- Images : Unsplash
- Déployé sur GitHub Pages

## Lancer localement

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000` dans le navigateur.

## Pages

- `index.html` — Accueil (hero, client visé, mission, témoignages, infolettre)
- `produits.html` — Catalogue (16 produits, filtres)
- `produit.html?id=xxx` — Détail produit
- `panier.html` — Panier (localStorage)

## Structure

```
nord-aventure/
  index.html
  produits.html
  produit.html
  panier.html
  styles/
    main.css
  scripts/
    products.js     // Catalogue
    cart.js         // Panier localStorage
    main.js         // Animations, scroll, compteurs
  README.md
  .nojekyll
```

## Crédits

- Photos : [Unsplash](https://unsplash.com)
- Icônes : [Lucide](https://lucide.dev)

## Mention

Tous les produits, prix, marques et témoignages présentés sont fictifs et créés à des fins de démonstration uniquement.

© 2026 Nord Aventure — Conçu au Québec. Testé dans le Nord.
