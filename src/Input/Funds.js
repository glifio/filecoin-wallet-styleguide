import React, { forwardRef } from 'react'
import { func, string } from 'prop-types'
import Box from '../Box'
import BaseInput from './BaseInput'
import { Text } from '../Typography'

const Funds = forwardRef(
  ({ onChange, value, placeholder, error, ...props }, ref) => {
    return (
      <Box
        display="flex"
        maxWidth="480px"
        minHeight="160px"
        border={1}
        borderRadius={1}
        ref={ref}
        {...props}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexGrow="1"
          width="280px"
          textAlign="center"
          borderRight="1px solid #444"
        >
          <Text>Amount</Text>
        </Box>
        <Box display="inline-block" width="280px">
          <Box display="block" height="80px" width="100%">
            <BaseInput
              height="100%"
              width="100%"
              border="0"
              onChange={onChange}
              value={value}
              placeholder={placeholder}
            />
          </Box>
          <Box display="block" height="80px" width="100%" borderTop="1px solid">
            <BaseInput
              height="100%"
              width="100%"
              border="0"
              onChange={onChange}
              value={value}
              placeholder={placeholder}
            />
          </Box>
        </Box>
        {error && <p>{error}</p>}
      </Box>
    )
  }
)

Funds.propTypes = {
  onChange: func.isRequired,
  label: string.isRequired,
  value: string,
  error: string,
  placeholder: string
}

Funds.defaultProps = {
  value: ''
}

export default Funds
