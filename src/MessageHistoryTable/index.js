import React, { forwardRef } from 'react';
import { array } from 'prop-types';

import { ADDRESS_PROPTYPE, MESSAGE_PROPS } from '../customPropTypes';
import MessageRow from './MessageRow';

const MsgHistoryTable = forwardRef(({ address, messages, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {messages.map(msg => (
        <MessageRow {...msg} />
      ))}
    </div>
  );
});

MsgHistoryTable.propTypes = {
  /**
   * The FIL address this message history relates to
   */
  address: ADDRESS_PROPTYPE,
  /**
   * An array of message types
   */
  messages: array(MESSAGE_PROPS)
};

export default MsgHistoryTable;
