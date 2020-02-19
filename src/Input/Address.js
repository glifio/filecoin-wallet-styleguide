import React, { forwardRef, useState } from 'react'
import { func, string } from 'prop-types'
import { validateAddressString } from '@openworklabs/filecoin-address'
import TextInput from './Text'

const Address = forwardRef(
  ({ onChange, value, placeholder, label, ...props }, ref) => {
    const [addressValidationError, setAddressValidationError] = useState(false)
    return (
      <TextInput
        onBlur={() => {
          const isValidAddress = validateAddressString(value)
          if (value && !isValidAddress) setAddressValidationError(true)
        }}
        onFocus={() => {
          if (addressValidationError) setAddressValidationError(false)
        }}
        ref={ref}
        {...props}
        label={label}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        error={addressValidationError && `Invalid ${label} address.`}
      />
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
