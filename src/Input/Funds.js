import React, { useState, forwardRef } from 'react';
import { func, string, shape } from 'prop-types';

const Funds = forwardRef(
  ({ onChange, value, placeholder, label, error }, ref) => {
    // TODO: conversion between rates
    return (
      <div ref={ref} {...props}>
        <div>Amount</div>
        {/* how do we chunk the address in the input component? */}
        <input onChange={onChange} value={value} placeholder="t1..." />
        {error.type && <p>{error.message}</p>}
      </div>
    );
  }
);

Funds.propTypes = {
  onChange: func.isRequired,
  label: string.isRequired,
  value: string,
  error: shape({
    message: string,
    type: string
  })
};

Funds.defaultProps = {
  error: { type: null, message: '' },
  value: ''
};

export default Funds;
