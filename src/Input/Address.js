import React, { forwardRef } from 'react'
import { func, string } from 'prop-types'
import TextInput from './Text'

const Address = forwardRef(
  ({ onChange, value, placeholder, label, error, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        {...props}
        label={label}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        error={error}
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
