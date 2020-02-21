import styled from 'styled-components'
import { space, color, layout, border, flexbox } from 'styled-system'

export default styled.input`
  display: inline-block;
  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;
  border: ${props => props.theme.borders[1]}
  border-radius: ${props => props.theme.radii[1]}
  transition: 0.2s ease-in-out;
  text-align: right;
  background: ${props => props.theme.colors.background.input.base};

  &:hover {
    background: ${props => props.theme.colors.background.input.active};
  }

  &:focus {
    box-shadow: 0;
    outline: 0;
    background: ${props => props.theme.colors.background.input.active};
  }
  ${color}
  ${space}
  ${layout}
  ${border}
  ${flexbox}
`
