import styled from 'styled-components'
import { space, layout, borderRadius, flexbox } from 'styled-system'

export default styled.button`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.status.inactive
      : props.theme.colors.background.button[props.buttonStyle]};
  border-color: ${props =>
    props.disabled
      ? props.theme.colors.status.inactive
      : props.theme.colors.border.button[props.buttonStyle]};
  color: ${props => props.theme.colors.core.nearblack};
  ${borderRadius}
  ${space}
  ${layout}
  ${flexbox}
`
