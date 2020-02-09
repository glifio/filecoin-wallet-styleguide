import React, { forwardRef } from 'react';
import { string } from 'prop-types';

// copmponent responsible for chunking addresses

const Address = forwardRef(({ address, ...props }, ref) => (
  <p ref={ref} {...props}>
    {address}
  </p>
));

Address.propTypes = {
  /**
   * filecoin address
   */
  address: string
};

Address.defaultProps = {
  address: ''
};

export default Address;
