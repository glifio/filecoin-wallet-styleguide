import styled from 'styled-components'
import { space, color, layout, border, flexbox } from 'styled-system'

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
