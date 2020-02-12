import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import { withPropsTable } from 'storybook-addon-react-docgen'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'
import {
  BaseStyles,
  theme,
  ThemeProvider
} from '@openworklabs/filecoin-wallet-styleguide'

addDecorator(withPropsTable)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})

addDecorator(withA11y)

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <BaseStyles>{storyFn()}</BaseStyles>
  </ThemeProvider>
))

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module)
