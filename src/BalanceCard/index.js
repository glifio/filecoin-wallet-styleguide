import React, { forwardRef } from 'react'
import { string, func, bool } from 'prop-types'

/*
 @ALEX - should we consider extending the ColoredContainer component for this?
*/

// this component will also be responsible for fetching the fiat denominated amount of the balance
const BalanceCard = forwardRef(
  ({ balance, onSend, onReceive, disableButtons, ...props }, ref) => (
    <div ref={ref} {...props}>
      <p>Balance</p>
      <p>{balance}FIL</p>
      {/* @alex this will change to be dynamically created, for now just pretend 1 FIL = 5 USD */}
      <p>{Number(balance) * 5}USD</p>
      <button disabled={disableButtons} onClick={onReceive}>
        Receive
      </button>
      <button disabled={disableButtons} onClick={onSend}>
        Send
      </button>
    </div>
  )
)

BalanceCard.propTypes = {
  /**
   * users balance in Filecoin denom
   */
  balance: string.isRequired,
  /**
   * action fired when send button is clicked
   */
  onSend: func.isRequired,
  /**
   * action fired when receive button is clicked
   */
  onReceive: func.isRequired,
  /**
   * determines if the buttons should be disabled or not
   */
  disableButtons: bool
}

BalanceCard.defaultProps = {
  disableButtons: false
}

export default BalanceCard
