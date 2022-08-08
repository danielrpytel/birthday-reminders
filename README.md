# Birthdays Reminder App

An application to remind the user of his friend's birthdays. Built with React, JavaScript, and TailwindCSS.

[Demo the project](https://danielrpytel.github.io/birthday-reminders)

## Data format

Friend's data is stored in ./src/data/friends.json and images of friends are in ./public/people-img.
All images must be in following format: Firstname-Lastname.jpg ex. **Daniel-Pytel.jpg**. If the image is not found its replaced with img-placeholder.png.

friends.json object structure:

Friend
    -id: int
    -fName: string
    -lName: string
    -dateOfBirth: string
    -favDrinks: [ string ]
    -favActivity: [ string ]

dateOfBirth must be in moment format "MMMM D YYYY" ex. **"April 2 1998"** (calculating days left to birthday and years old).

Friend object structure for components:
(All additional data from functions in ./src/hooks/GetAdditionalInfo)

Friend
    -id: int
    -fName: string
    -lName: string
    -dateOfBirth: string
    -favDrinks: [ string ]
    -favActivity: [ string ]
    -daysToBday: int
    -turningYearsOld: int
    -imgSrc: string

    getTurningYearsOld( date )
    getDaysToBday( date )
    getImgSrc( fName, lName )

## Instalation and Setup

### `yarn install`

Installs all dependencies listed within package.json in the local node_modules folder.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

