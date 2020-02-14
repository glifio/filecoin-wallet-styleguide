import React, { forwardRef } from 'react'
import { string, func, bool } from 'prop-types'
import { Box, Button } from '../'
// To be commented in when the 'updatedTextStyles' branch gets merged into this one
// import { BigTitle, Title, Label } from '../Typography'

/*
 @ALEX - should we consider extending the ColoredContainer component for this?
*/

// this component will also be responsible for fetching the fiat denominated amount of the balance
const BalanceCard = forwardRef(
  ({ balance, onSend, onReceive, disableButtons, ...props }, ref) => (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width={11}
      height={11}
      border={1}
      borderRadius={2}
      p={3}
      color="darkgray"
      bg="transparent"
      ref={ref}
      {...props}
    >
      <h4>Balance</h4>
      <Box>
        <h1>{balance}FIL</h1>
        {/* @alex this will change to be dynamically created, for now just pretend 1 FIL = 5 USD */}
        <h2>{Number(balance) * 5}USD</h2>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button
          type="secondary"
          title="Receive"
          disabled={disableButtons}
          onClick={onReceive}
          width={120}
        ></Button>
        <Button
          type="primary"
          title="Send"
          disabled={disableButtons}
          onClick={onSend}
          ml={2}
          width={120}
        ></Button>
      </Box>
    </Box>
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
