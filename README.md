# RXPHelloWorld

This app works on React Native (iOS, Android) and web. Most of the app's code is contained in `App.tsx`.

The commands in the instructions below assume you are in the root of this repo.

### Initial Setup

- Run `npm install`. This fetches the dependencies.

### Building for Web

- Run `npm run web-watch`. This compiles the TypeScript code and recompiles it whenever any files are changed.
- Open `index.html` in your browser to view the result.

### Building for React Native

- Run `npm run rn-watch`. This compiles the TypeScript code and recompiles it whenever any files are changed.
- In another command prompt run `npm start`. This starts the React Native Packager.
- Use Xcode or Android Studio to build and deploy the native app code just like you would with any other React Native project.


## Changelog 

> based on code generated from reacte-xp-app

- Support `.js`, `.jsx` modules via babel-preset-react-app.


```
// ./JsComponent.js

import React from 'react'
import * as RX from 'reactxp'

const JsComp = ({children, ...props}) => <RX.Text {...props}>{children + '!!!'}</RX.Text>

export default JsComp

// ./TypedComponent.tsx

import RX = require('reactxp');
import JsC = require('./JsComponent');
const JsComponent = JsC.default as any

export = () => <RX.View><JsComponent>Foo</JsComponent></RX.View>
```