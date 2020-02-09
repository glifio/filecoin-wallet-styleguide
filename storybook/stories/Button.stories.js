import React from 'react';
import { Button } from '@openworklabs/filecoin-wallet-styleguide';

export default {
  title: 'Button'
};

export const ButtonBase = () => (
  <Button title="Button Base" onClick={e => console.log(e.target.value)} />
);

export const Primary = () => (
  <Button.Primary title="Primary" onClick={e => console.log(e.target.value)} />
);

export const Secondary = () => (
  <Button.Secondary
    title="Secondary"
    onClick={e => console.log(e.target.value)}
  />
);
