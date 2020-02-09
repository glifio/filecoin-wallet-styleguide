import React, { useImperativeHandle } from 'react';
import { Input } from '@openworklabs/filecoin-wallet-styleguide';

export default {
  title: 'Input'
};

export const Text = () => <Input.Text onChange={e => handle(e)} />;
