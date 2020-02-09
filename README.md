# Filecoin-wallet-styleguide

## Developing locally

1. `git clone git@github.com:openworklabs/filecoin-wallet-styleguide.git && cd filecoin-wallet-styleguide`<br />
2. `npm i`
3. `npm link`
4. `npm run start`
5. `cd storybook`
6. `npm i`
7. `npm link @openworklabs/filecoin-wallet-styleguide`
8. `npm run storybook`

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
