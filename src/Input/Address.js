import React, { forwardRef } from 'react'
import { func, string } from 'prop-types'
import { Box, Input } from '../'

const Address = forwardRef(
  ({ onChange, value, placeholder, label, error, ...props }, ref) => {
    // TODO: address validation occurs here @jon
    return (
      <Box
        display="inline-block"
        alignContent="center"
        border={1}
        borderRadius={1}
        ref={ref}
        {...props}
      >
        <Box display="inline-block" mx={3}>
          {label}
        </Box>
        {/* how do we chunk the address in the input component? */}
        <input onChange={onChange} value={value} placeholder="t1..." />
        {error && <p>{error}</p>}
      </Box>
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
