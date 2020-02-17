import styled from 'styled-components'
import { space, color, layout, border, flexbox } from 'styled-system'

//input wrapper
export default styled.input`
    display: inline-block;
    padding-left: ${props => props.theme.space[2]}px;
    padding-right: ${props => props.theme.space[2]}px;
    border: 0;
    border-radius: ${1}
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    transition: 0.2s ease-in-out;
    text-align: center;

    &:hover {
    background: #f5f5f5;
    }

    &:focus {
    box-shadow: 0;
    outline: 0;
    background: #f5f5f5;
    }
  ${color}
  ${space}
  ${layout}
  ${border}
  ${flexbox}
`
