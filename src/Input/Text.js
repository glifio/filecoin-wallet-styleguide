import React from 'react';
import { func, string, shape } from 'prop-types';

const Text = ({ onChange, value, placeholder, label, error }) => (
  <>
    <div>{label}</div>
    <input onChange={onChange} value={value} placeholder={placeholder} />
    {error.type && <p>{error.message}</p>}
  </>
);

Text.propTypes = {
  onChange: func.isRequired,
  label: string.isRequired,
  value: string,
  placeholder: string,
  error: shape({
    message: string,
    type: string
  })
};

Text.defaultProps = {
  error: { type: null, message: '' },
  value: ''
};

export default Text;
