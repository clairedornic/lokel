# Lokel

## Projet de traduction et d'apprentissage du langage des signes

Ce projet vise à rendre le langage des signes plus accessible en le transformant en un langage facilement traduisible et simple à apprendre. L'objectif principal est de faciliter la communication des personnes sourdes, malentendantes ou muettes en proposant des fonctionnalités de traduction et d'apprentissage du langage des signes.

## Fonctionnalités
### Fonctionnalités du MVP

- **Apprentissage interactif** : L'application offrira des fonctionnalités d'apprentissage du langage des signes à l'aide d'exercices pratiques qui leur permettront de comprendre et d'apprendre toutes les nuances d'une langue des signes.

- **Compte utilisateur** : L'application permettra aux utilisateurs de créer un compte sur l'application pour accéder à son contenu et également leur permettre de suivre leur progression au niveau de l'apprentissage d'une ou de plusieurs langues des signes.
### Fonctionnalités futures

- **Traduction en temps réel** : L'application permettra aux utilisateurs de saisir du texte et de le traduire en langage des signes en temps réel. Cela facilitera la communication entre les personnes utilisant la langue des signes et celles qui ne la comprennent pas.

- **Dictionnaire des signes** : Une base de données de signes sera intégrée à l'application, permettant aux utilisateurs de rechercher des signes spécifiques et d'obtenir leur signification. Cela facilitera la compréhension et l'apprentissage des signes individuels.

- **Profil utilisateur** :  L'application permettra aux utilisateurs de gérer leurs informations personnelles et d'accéder à des options afin de personnaliser l'application en fonction de leurs besoins.

## Technologies utilisées

Ce projet est développé en utilisant les technologies suivantes :

- **React Native** : Une librairie JavaScript pour le développement d'applications mobiles multiplateformes. Il permet de créer des interfaces utilisateur réactives et dynamiques.

- **Firebase** : Une plateforme de développement d'applications qui fournit des services tels que l'authentification des utilisateurs, la base de données en temps réel, le stockage de fichiers et les notifications push.

## Installation

1. Assurez-vous d'avoir Node.js et npm installés sur votre machine.

2. Clonez ce référentiel sur votre machine locale :
```
git clone https://github.com/clairedornic/lokel.git
```

3. Accédez au répertoire du projet :
```
cd lokel
```

4. Installez les dépendances du projet à l'aide de la commande suivante :

```
npm install
```

5. Créez un projet Firebase sur le site officiel de Firebase et récupérez les clés d'API nécessaires.

6. Configurez les clés d'API Firebase dans le fichier de configuration de l'application :
```
// Chemin du fichier de configuration : /src/config/firebase.js
const firebaseConfig = {
  apiKey: 'VOTRE_API_KEY',
  authDomain: 'VOTRE_AUTH_DOMAIN',
  databaseURL: 'VOTRE_DATABASE_URL',
  projectId: 'VOTRE_PROJECT_ID',
  storageBucket: 'VOTRE_STORAGE_BUCKET',
  messagingSenderId: 'VOTRE_MESSAGING_SENDER_ID',
}
```
