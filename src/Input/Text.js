import React from 'react'
import styled from 'styled-components'
import { space, color, layout, border, flexbox } from 'styled-system'
import { func, string } from 'prop-types'
import BaseInput from './BaseInput'
import Box from '../Box'

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

const Text = ({ onChange, value, placeholder, label, error }) => (
  <>
    <TextInputWrapper>
      <Box>
        <Box display="inline" px={3}>
          {label}
        </Box>
        {/* how do we chunk the address in the input component? */}
        <BaseInput
          display="inline-block"
          py={3}
          px={3}
          border={0}
          borderLeft={1}
          borderTopRightRadius={1}
          borderBottomRightRadius={1}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </Box>
      {error && <p my={0}>{error}</p>}
    </TextInputWrapper>
  </>
)

Text.propTypes = {
  onChange: func.isRequired,
  label: string.isRequired,
  value: string,
  placeholder: string,
  error: string
}

Text.defaultProps = {
  value: ''
}

export default Text
