import styled from 'styled-components'
import { space, color, layout, border, flexbox } from 'styled-system'

//input wrapper
export default styled.input`
    display: inline-block;
    border: 0;
    border-radius: 4px;
    border-left: 1px solid;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    transition: 0.2s ease-in-out;

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
