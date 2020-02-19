import styled from 'styled-components'
import { color, border, layout, space, flexbox } from 'styled-system'

export { default as theme } from './theme'
export { default as ThemeProvider } from './ThemeProvider'
export { default as BaseStyles } from './BaseStyles'

// components
export { default as Container } from './Container'
export { default as Card } from './Card'
export { default as AccountCard } from './AccountCard'
export { default as BalanceCard } from './BalanceCard'
export { default as Input } from './Input'
export { default as Address } from './Address'
export { default as Button } from './Button'
export { default as BaseButton } from './Button/BaseButton'
export { default as Stepper } from './Stepper'
export { default as Glyph } from './Glyph'
export { default as Box } from './Box'

// typography
export * from './Typography'

export const Icon = styled.span`
  display: inline-block;
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
`
