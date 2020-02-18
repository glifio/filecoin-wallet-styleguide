import styled from 'styled-components'
import { space, color, layout, border, flexbox } from 'styled-system'

export default styled.button`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  ${color}
  ${space}
  ${layout}
  ${border}
  ${flexbox}
`
