import styled from 'styled-components'
import {
  color,
  typography,
  border,
  layout,
  space,
  flexbox
} from 'styled-system'

export { default as theme } from './theme'
export { default as ThemeProvider } from './ThemeProvider'
export { default as BaseStyles } from './BaseStyles'

// components
export { default as AccountCard } from './AccountCard'
export { default as BalanceCard } from './BalanceCard'
export { default as Input } from './Input'
export { default as Address } from './Address'
export { default as Button } from './Button'
export { default as Stepper } from './Stepper'
export { default as Glyph } from './Glyph'
export { default as Box } from './Box'

// typography
export { default as Text } from './Text'

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
`

export const MenuItem = styled.li`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
`

export const Icon = styled.span`
  display: inline-block;
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
`

// export const Input = styled.input`

//   ${space}
//   ${color}
//   ${layout}
//   ${flexbox}
//   ${border}
//   ${typography}

//   &:focus {
//     outline: none;
//   }
// `

export const Label = styled.h5`
  margin: 0;
  text-transform: uppercase;
  font-weight: 600;
  color: #444;
  ${color}
  ${typography}
  ${layout}
`
