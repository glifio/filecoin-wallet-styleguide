import React, { useState, forwardRef } from 'react';
import { func, string, shape } from 'prop-types';

const Address = forwardRef(
  ({ onChange, value, placeholder, label, error, ...props }, ref) => {
    // TODO: address validation occurs here @jon
    return (
      <div ref={ref} {...props}>
        <div>{label}</div>
        {/* how do we chunk the address in the input component? */}
        <input onChange={onChange} value={value} placeholder="t1..." />
        {error.type && <p>{error.message}</p>}
      </div>
    );
  }
);

Address.propTypes = {
  onChange: func.isRequired,
  label: string.isRequired,
  value: string,
  error: shape({
    message: string,
    type: string
  })
};

Address.defaultProps = {
  error: { type: null, message: '' },
  value: ''
};

export default Address;
