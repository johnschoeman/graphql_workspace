# Notes for react native

### Setup with Expo and apollo-client

alright guys and especially @John Schoeman I doubt this solves all problems and may create new ones (yet to be seen) but after several hours of experimentation I've figured out some steps that seem to produce fewer errors, and allowed me to create a basic react native app using apollo / graphql.

*Step 1:*
ensure you have nvm installed by running `command -v nvm` and ensuring it outputs `nvm` (edited)

if it doesn't, figure out how to install nvm.  not going to list steps for this since I didn't have to do it.

*Step 2:*
navigate to the directory where you will create your react native app folder (edited)

*Step 3:*
run `nvm install node`

*Step 4:*
ensure that `node -v` outputs v8.x.x, and `npm -v` outputs v5.x.x

*Step 5:*
run `nvm install 7.10.1`

*Step 6*:
ensure that `node -v` outputs v7.10.1

*Step 7:*
ensure that `npm -v` outputs v4.2.0 (edited)
1 reply Today at 7:47 AM View thread

*Step 8:*
run `npm i -g create-react-native-app` even if you have done so before

*Step 9:*
run `create-react-native-app brand-new-project-name` where your project name is something you haven't used before

*Step 10:*
cd into your project

*Step 11:*
run `rm -rf node_modules`

*Step 12:*
replace the contents of app.json with this...
```
{
  "expo": {
    "sdkVersion": "15.0.0"
  }
}
```

*Step 13:*
replace the contents of package.json with this (fill in your own project name for the 'name' field)...
```
{
  "name": "brand-new-project-name",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "jest-expo": "^0.3.0",
    "react-native-scripts": "0.0.27",
    "react-test-renderer": "~15.4.1"
  },
  "main": "./node_modules/react-native-scripts/build/bin/crna-entry.js",
  "scripts": {
    "start": "react-native-scripts start",
    "eject": "react-native-scripts eject",
    "android": "react-native-scripts android",
    "ios": "react-native-scripts ios",
    "test": "node node_modules/jest/bin/jest.js --watch"
  },
  "jest": {
    "preset": "jest-expo"
  },
  "dependencies": {
    "expo": "15.0.2",
    "react": "15.4.2",
    "react-native": "0.42.3",
    "react-apollo": "^1.2.0"
  }
}
```

*Step 14:*
run `npm install`

*Step 15:*
run `npm run start -- --reset-cache`

*Step 16:*
use the expo app to scan the barcode

*Step 17:*
ensure the app is loaded and the name of the app on your phone (which I see labeled when I press the multitask button on android) is the same as your project name

*Step 18:*
start coding!

### Forms

#### Installation with create-react-native-app or Expo

npm install react-native-elements --save