import React from 'react'
import { object, node } from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from './theme'

const ThemeProvider = ({ children, theme, ...rest }) => {
  return (
    <StyledThemeProvider theme={theme} {...rest}>
      {children}
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  theme: object,
  children: node.isRequired
}

ThemeProvider.defaultProps = {
  theme
}

ThemeProvider.displayName = 'ThemeProvider'

export default ThemeProvider
