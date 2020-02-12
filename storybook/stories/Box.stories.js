import React from 'react';
import {
  ThemeProvider,
  theme,
  Box
} from '@openworklabs/filecoin-wallet-styleguide';

export default {
  title: 'Box'
};

/*
@ALEX - can we show an example of applying styled-system
 styles to the Box component once 
 our themes get worked out? 

 (this isn't working yet)
*/

export const BlueBox = () => (
  <ThemeProvider theme={theme}>
    {/* all styled-system styles from theme are valid */}
    <Box border={0} color="blue">
      <div>Yo!</div>
    </Box>
  </ThemeProvider>
);
