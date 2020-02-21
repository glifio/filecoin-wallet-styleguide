import styled from 'styled-components'
import { space, layout, borderRadius, flexbox } from 'styled-system'

export default styled.button`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.status.inactive
      : props.theme.buttons[props.buttonStyle].background};
  border-color: ${props =>
    props.disabled
      ? props.theme.colors.status.inactive
      : props.theme.buttons[props.buttonStyle].borderColor};
  color: ${props => props.theme.buttons[props.buttonStyle].color};
  ${borderRadius}
  ${space}
  ${layout}
  ${flexbox}
`
