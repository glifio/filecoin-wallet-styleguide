import React, { forwardRef } from 'react'
import { func, string } from 'prop-types'
import InputWrapper from './InputWrapper'
import BaseInput from './BaseInput'
import { Box } from '../'

const Address = forwardRef(
  ({ onChange, value, placeholder, label, error, ...props }, ref) => {
    // TODO: address validation occurs here @jon
    return (
      <InputWrapper display="inline-block" border={1} borderRadius={1}>
        <Box ref={ref} {...props}>
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
          {error && <p>{error}</p>}
        </Box>
      </InputWrapper>
    )
  }
)

Address.propTypes = {
  onChange: func.isRequired,
  label: string.isRequired,
  value: string,
  error: string,
  placeholder: string
}

Address.defaultProps = {
  value: '',
  placeholder: 'f1...'
}

export default Address
