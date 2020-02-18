import styled from 'styled-components'
import { space, color, layout, border, flexbox } from 'styled-system'

//input wrapper
export default styled.div`
  display: inline-block;
  border: ${props => props.theme.borders[1]};
  border-radius: ${props => props.theme.radii[1]};
  ${color}
  ${space}
  ${layout}
  ${border}
  ${flexbox}
`
