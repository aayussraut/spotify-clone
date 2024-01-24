# Spotify Clone

- A clone of the Spotify web app built with React, Recoil, and Firebase.

## Table of Contents

- Features
- Technologies
- Installation
- Usage
- Contributing
- Screenshots

## Features

- Search for albums
- Real-time updates for the currently playing song

## Technologies

- React
- Recoil
- Firebase Authentication

## Installation

To install and run the project locally, follow these steps:

- Clone the repository to your local machine:

```
$ git clone https://github.com/your-username/spotify-clone.git
$ cd spotify-clone
```

- Install the dependencies:

```
  $ npm install
```

- Create a new Firebase project and enable Authentication.
  Add your Firebase configuration to a .env file in the project root:

```
  VITE_API_KEY=your-firebase-api-key
  VITE_AUTH_DOMAIN=your-firebase-auth-domain
  VITE_PROJECT_ID=your-firebase-project-id
  VITE_STORAGE_BUCKET=your-firebase-storage-bucket
  VITE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
  VITE_APP_ID=your-firebase-app-id
```

- Start the development server:

```
$ npm start
```

## Usage

To use the app, open it in your browser at http://localhost:5173. You can sign up or log in with your email and password.

## Contributing

If you want to contribute to the project, follow these steps:

- Fork the repository and clone it to your local machine:

```
$ git clone https://github.com/your-username/spotify-clone.git
$ cd spotify-clone
```

- Create a new branch for your changes:

```
$ git checkout -b your-branch-name
```

- Make your changes and commit them:

```
$ git add .
$ git commit -m "Your commit message"
```

- Push your changes to your forked repository:

```
$ git push origin your-branch-name
```

- Create a pull request on the main repository and wait for it to be reviewed and merged.

## Screenshots

- Home Page
  <img src="./images/default-home.png" height={400} width={400}>

  - Loggedin Home Page
    <img src="./images/loggedin-home-page.png" height={400} width={400}>
  - Login Page
    <img src="./images/login-page.png" height={400} width={400}>
  - Signup Page
    <img src="./images/signup-page.png" height={400} width={400}>
  - Playlist Page
    <img src="./images/playlist.png" height={400} width={400}>
  - Search Page
    <img src="./images/search-page.png" height={400} width={400}>
