# 🚀 Coding Tool Box – Guide d'installation

Bienvenue dans **Coding Tool Box**, un outil complet de gestion pédagogique conçu pour la Coding Factory.  
Ce projet Laravel inclut la gestion des groupes, promotions, étudiants, rétro (Kanban), QCM  dynamiques, et bien plus.

---

## 📦 Prérequis

Assurez-vous d’avoir les éléments suivants installés sur votre machine :

- PHP ≥ 8.1
- Composer
- MySQL ou MariaDB
- Node.js + npm (pour les assets frontend si nécessaire)
- Laravel CLI (`composer global require laravel/installer`)

---

## ⚙️ Installation du projet

Exécutez les étapes ci-dessous pour lancer le projet en local :

### 1. Cloner le dépôt

```bash
git clone https://m_thibaud@bitbucket.org/m_thibaud/projet-web-2025.git
cd coding-tool-box
cp .env.example .env
```

### 2. Configuration de l'environnement

```bash
✍️ Ouvrez le fichier .env et configurez les paramètres liés à votre base de données :

DB_DATABASE=nom_de_votre_bdd
DB_USERNAME=utilisateur
DB_PASSWORD=motdepasse
```

### 3. Installation des dépendances PHP

```bash
composer install
```

### 4. Nettoyage et optimisation du cache

```bash
php artisan optimize:clear
```

### 5. Génération de la clé d'application

```bash
php artisan key:generate
```

### 6. Migration de la base de données

```bash
php artisan migrate
```

### 7. Population de la base (Données de test)

```bash
php artisan db:seed
```

---

## 💻 Compilation des assets (si nécessaire)

```bash
npm install
npm run dev
```

---

## 👤 Comptes de test disponibles

| Rôle       | Email                         | Mot de passe |
|------------|-------------------------------|--------------|
| **Admin**  | admin@codingfactory.com       | 123456       |
| Enseignant | teacher@codingfactory.com     | 123456       |
| Étudiant   | john.doe@codingfactory.com    | 123456       |
| Étudiant   | jane.smith@codingfactory.com  | 123456       |
| Étudiant   | alice.brown@codingfactory.com     | 123456       |
| Étudiant   | bob.johnson@codingfactory.com     | 123456       |
| Étudiant   | charlie.williams@codingfactory.com   | 123456       |
| Étudiant   | david.miller@codingfactory.com    | 123456       |
| Étudiant   | emily.wilson@codingfactory.com    | 123456       |
| Étudiant   | frank.moore@codingfactory.com    | 123456       |
| Étudiant   | grace.taylor@codingfactory.com    | 123456       |
| Étudiant   | henry.anderson@codingfactory.com    | 123456       |



---

## 🚧 Fonctionnalités principales

J’ai réalisé l’intégralité du **backlog 3**, ce qui comprend les éléments suivants :

- 👥 Il est possible de créer des groupes d’étudiants automatiquement, en fonction de leurs bilans de compétence.
- 🗂️ Les utilisateurs peuvent créer une rétrospective (format Kanban) pour une promotion donnée.
- 🔄 Les rétrospectives sont mises à jour en temps réel pour tous les utilisateurs connectés grâce à l’intégration de **Pusher.js**.
- 📋 Un système de listing permet de retrouver facilement toutes les rétrospectives associées à une promotion.

---

## 🎁 Fonctionnalités bonus

- 📆 Système de gestion de date de début pour les groupes et les rétrospectives (accessibilité restreinte + affichage dynamique)
- 🗑️ Suppression et modification des cartes/colonnes dans la rétro (avec politiques d'accès – Policies Laravel)
- 👥 Affichage des groupes en fonction des projets associés
- 📊 Ajout d’un **dashboard** dédié pour les membres des groupes avec un récapitulatif de le dépôt **GitHub**




