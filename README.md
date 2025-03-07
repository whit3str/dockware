# Software Catalog Manager

Une application auto-hébergée pour gérer votre catalogue de logiciels professionnels (Autocad, Solidworks, Ansys, etc.).

## Fonctionnalités

- 📦 Gestion des licences et versions des logiciels
- 🔒 Interface de téléchargement sécurisée
- 🔍 Système de recherche et de filtrage avancé
- 👥 Gestion des utilisateurs et des permissions
- 🏷️ Catégorisation et tags
- ⚙️ Interface d'administration complète
- 🔔 Notifications de mises à jour
- 📊 Tableau de bord avec statistiques
- 💾 Stockage sécurisé des fichiers
- 🔄 Gestion des versions et mises à jour

## Prérequis

- Docker
- Docker Compose
- Git

## Installation

1. Clonez ce dépôt :
```bash
git clone [URL_DU_REPO]
cd software-catalog
```

2. Configurez les variables d'environnement :
```bash
cp .env.example .env
# Éditez le fichier .env avec vos configurations
```

3. Lancez l'application :
```bash
docker-compose up -d
```

4. Accédez à l'application :
- Frontend : http://localhost:3000
- Backend API : http://localhost:8000
- MinIO Console : http://localhost:9001
  - Identifiants par défaut :
    - Username: admin
    - Password: password123

## Structure du projet

```
software-catalog/
├── frontend/          # Application React
│   ├── public/       # Fichiers statiques
│   └── src/         # Code source React
├── backend/          # API Node.js/Express
│   ├── src/         # Code source Node.js
│   └── config/      # Configurations
├── docker-compose.yml # Configuration Docker
└── README.md        # Documentation
```

## Sécurité

- 🔐 Authentification JWT
- 👥 Gestion des rôles et permissions
- 🔒 Stockage sécurisé des fichiers
- 🔑 Gestion sécurisée des licences
- 🛡️ Protection contre les attaques courantes

## Développement

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Support

Pour toute question ou problème, n'hésitez pas à ouvrir une issue dans le dépôt GitHub.

## Auteurs

- Votre Nom - [@votrecompte](https://github.com/votrecompte)

## Remerciements

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [MinIO](https://min.io/) 