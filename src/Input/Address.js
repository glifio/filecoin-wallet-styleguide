import React, { forwardRef } from 'react'
import { func, string } from 'prop-types'

const Address = forwardRef(
  ({ onChange, value, placeholder, label, error, ...props }, ref) => {
    // TODO: address validation occurs here @jon
    return (
      <div ref={ref} {...props}>
        <div>{label}</div>
        {/* how do we chunk the address in the input component? */}
        <input onChange={onChange} value={value} placeholder="t1..." />
        {error && <p>{error}</p>}
      </div>
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
