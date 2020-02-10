import React from 'react';
import { Stepper } from '@openworklabs/filecoin-wallet-styleguide';

export default {
  title: 'Stepper'
};

export const ThreeSteps = () => {
  return (
    <Stepper
      step={2}
      totalSteps={3}
      incompleteDotColor="grey"
      completeDotColor="green"
      textColor="blue"
    />
  );
};
