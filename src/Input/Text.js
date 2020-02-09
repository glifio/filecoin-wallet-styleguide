import React from 'react';
import { func, string } from 'prop-types';

const Text = ({ onChange, value, placeholder, label, error }) => (
  <>
    <div>{label}</div>
    <input onChange={onChange} value={value} placeholder={placeholder} />
    {error && <p>{error}</p>}
  </>
);

Text.propTypes = {
  onChange: func.isRequired,
  label: string.isRequired,
  value: string,
  placeholder: string,
  error: string
};

Text.defaultProps = {
  value: ''
};

export default Text;
