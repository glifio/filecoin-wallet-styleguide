import React, { forwardRef } from 'react'
import { func, string } from 'prop-types'
import InputWrapper from './InputWrapper'
import { Box, Input } from '../'

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
          <input
            css={`
              display: inline-block;
              padding: 0.875rem 0.5rem;
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
            `}
            onChange={onChange}
            value={value}
            placeholder="t1..."
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
  error: string
}

Address.defaultProps = {
  value: ''
}

export default Address
