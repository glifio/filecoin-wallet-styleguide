import React from 'react';
import { AccountCard } from '@openworklabs/filecoin-wallet-styleguide';

export default {
  title: 'AccountCard'
};

export const PrimaryExample = () => (
  <AccountCard
    color="#5E26FF"
    alias="Prime"
    address="t1z225tguggx4onbauimqvxzutopzdr2m4s6z6wgi"
    onSwitch={() => console.log('switching accounts!')}
  />
);

export const SecondaryExample = () => (
  <AccountCard
    color="darkblue"
    alias="Dual"
    address="t1z225tguggx4onbauimqvxzutopzdr2m4s6z6wgi"
    onSwitch={() => console.log('switching accounts!')}
  />
);
