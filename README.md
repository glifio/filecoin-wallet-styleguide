# Filecoin-wallet-styleguide

## Repo layout

React component library lives in `/src`. The `/storybook` directory has all the stories, and runs the front-end. The `/dist` directory contains the transpiled JSX for publishing to npm.

## Developing locally

1. `git clone git@github.com:openworklabs/filecoin-wallet-styleguide.git && cd filecoin-wallet-styleguide`<br />
2. `npm i`
3. `npm link`
4. `npm run start`
5. `cd storybook`
6. `npm i`
7. `npm link @openworklabs/filecoin-wallet-styleguide`
8. `npm run storybook`

## Adding a new component

1. Create a new directory in `/src` => `/src/<ComponentName>`
2. Add the component and its prop-types. Default export the component.
3. Export the component in `/src/index.js` (`export { default as ComponentName } from './ComponentName'`)
4. Add a new file `/storybook/stories/<ComponentName>.stories.js`
5. Create a new story for the component.

## Usage

### Install

```bash
npm install --save @openworklabs/filecoin-wallet-styleguide styled-components
```

### Import

```jsx
import React, { Component } from 'react';

import { Button } from '@openworklabs/filecoin-wallet-styleguide';

class Example extends Component {
  render() {
    return <Button size="medium">Click me!</Button>;
  }
}
```
