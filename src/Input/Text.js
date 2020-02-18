import React from 'react'
import styled from 'styled-components'
import { space, color, layout, border, flexbox } from 'styled-system'
import { func, string } from 'prop-types'
import BaseInput from './BaseInput'
import Box from '../Box'
// import { Text } from '../Typography'

//input wrapper
const TextInputWrapper = styled.div`
  display: inline-block;
  border: ${props => props.theme.borders[1]};
  border-radius: ${props => props.theme.radii[1]};
  ${color} 
  ${space} 
  ${layout}
  ${border}
  ${flexbox};
`

const TextInput = ({ onChange, value, placeholder, label, error }) => (
  <>
    <TextInputWrapper>
      <Box>
        <Box display="inline-block" px={3} minWidth="64px" textAlign="center">
          {label}
        </Box>
        {/* how do we chunk the address in the input component? */}
        <BaseInput
          display="inline-block"
          py={3}
          px={3}
          height="64px"
          border={0}
          borderLeft={1}
          borderTopRightRadius={1}
          borderBottomRightRadius={1}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </Box>
    </TextInputWrapper>
    {error && <p my={0}>{error}</p>}
  </>
)

TextInput.propTypes = {
  onChange: func.isRequired,
  label: string.isRequired,
  value: string,
  placeholder: string,
  error: string
}

TextInput.defaultProps = {
  value: ''
}

export default TextInput
