# Lokel

## Sign language translation and learning project

This project aims to make sign language more accessible by transforming it into a language that is easy to translate and simple to learn. The main aim is to make communication easier for people who are deaf, hard of hearing or mute, by offering sign language translation and learning functions.

## Features
### MVP features

- **Interactive learning** : The application will offer sign language learning features with practical exercises that will enable them to understand and learn all the nuances of sign language.

- **User account** : The application will allow users to create an account on the application to access its content and also allow them to track their progress in learning one or more sign languages.
- 
### Future features

- **Real-time translation** : The application will allow users to enter text and translate it into sign language in real time. This will facilitate communication between people who use sign language and those who do not.

- **Dictionary of signs** : A database of signs will be integrated into the application, allowing users to search for specific signs and obtain their meaning. This will make it easier to understand and learn individual signs.
  
- **User profile** :  The application will allow users to manage their personal information and access options to tailor the application to their needs.

## Technologies used

This project is being developed using the following technologies :

- **React Native** : A JavaScript library for developing cross-platform mobile applications. It can be used to create responsive and dynamic user interfaces.

- **Firebase** : An application development platform that provides services such as user authentication, real-time database, file storage and push notifications.

## Installation

1. Make sure you have Node.js and npm installed on your machine.

2. Clone this repository on your local machine:
```
git clone https://github.com/clairedornic/lokel.git
```

3. Go to the project directory :
```
cd lokel
```

4. Install the project dependencies using the following command :

```
npm install
```

5. Create a Firebase project on the official Firebase website and obtain the necessary API keys.

6. Configure the Firebase API keys in the :
```
// Configuration file path : /src/config/firebase.js
const firebaseConfig = {
  apiKey: 'VOTRE_API_KEY',
  authDomain: 'VOTRE_AUTH_DOMAIN',
  databaseURL: 'VOTRE_DATABASE_URL',
  projectId: 'VOTRE_PROJECT_ID',
  storageBucket: 'VOTRE_STORAGE_BUCKET',
  messagingSenderId: 'VOTRE_MESSAGING_SENDER_ID',
}
```
