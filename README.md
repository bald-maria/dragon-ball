Dragon Ball Wiki

Un wiki interactif des personnages et planètes de Dragon Ball, construit avec React.

##  Fonctionnalités

- Liste paginée de tous les personnages
-  Recherche en temps réel depuis n'importe quelle page
-  Filtres par race et affiliation
-  Système de favoris
-  Page des planètes avec détails
-  Mode sombre / clair
-  Sidebar de navigation

##  Stack technique

| Outil | Rôle |
|---|---|
| React 18 | Framework UI |
| Vite | Bundler |
| Tailwind CSS v4 | Styles |
| Axios | Appels API |
| React Query | Gestion des données |
| React Router | Navigation |
| Lucide React | Icônes |


### Screenshots
<div align="center">

### Page d'accueil
<img src="screenshots/Acceuil.png" width="800"/>

### Page détail personnage
<img src="screenshots/Detailperso.png" width="800"/>

### Page favoris
<img src="screenshots/favoris.png" width="800"/>

### Page planètes
<img src="screenshots/Planet.png" width="800"/>

### Page dark
<img src="screenshots/dark.png" width="800"/>

### Page Détail planet
<img src="screenshots/Détailplanet.png" width="800"/>


</div>



##  Installation

```bash
# Cloner le projet
git clone https://github.com/TonUsername/dragon-ball.git
cd dragon-ball

# Installer les dépendances
npm install

# Lancer le serveur
npm run dev
```

## 🌐 API utilisée

[Dragon Ball API](https://dragonball-api.com) — API gratuite fournissant personnages, transformations et planètes.

##  Structure du projet
src/
├── api/          # Appels Axios
├── context/      # Contextes globaux (thème, favoris, recherche, filtres)
├── components/   # Composants réutilisables
└── pages/        # Pages de l'application

##  Auteur

Mariama Baldé — L3 Informatique, UGANC