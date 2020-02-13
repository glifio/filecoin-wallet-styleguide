import React, { forwardRef } from 'react'
import { string, func } from 'prop-types'
import { ADDRESS_PROPTYPE } from '../customPropTypes'
import { Box, Glyph, Button, Text } from '../'

/*
 @ALEX - should we consider extending the ColoredContainer component for this?
*/

const truncate = string => `${string.slice(0, 4)}...${string.slice(-4)}`

const AccountCard = forwardRef(
  ({ address, alias, onAccountSwitch, ...props }, ref) => (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width={11}
      height={11}
      borderRadius={2}
      p={3}
      color="lightpurple"
      bg="purple"
      boxShadow={1}
      ref={ref}
      {...props}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        color="lightpurple"
        maxWidth={160}
      >
        <Glyph color="lightpurple" acronym="Ac"></Glyph>
        <Text>Account</Text>
      </Box>
      <Box color="lightpurple">
        <Text>{alias}</Text>
        <Text>{truncate(address)}</Text>
      </Box>
      <Box display="flex">
        <Button
          type="secondary"
          title="Switch"
          onClick={onAccountSwitch}
          color="lightpurple"
          borderColor="lightpurple"
          px={2}
        />
        <Button
          type="secondary"
          title="View on Ledger"
          onClick={onAccountSwitch}
          color="lightpurple"
          borderColor="lightpurple"
          ml={2}
          px={2}
        />
      </Box>
    </Box>
  )
)

AccountCard.propTypes = {
  /**
   * Filecoin address
   */
  address: ADDRESS_PROPTYPE,
  /**
   * Human readable alias of Filecoin address
   */
  alias: string.isRequired,
  /**
   * Sets background-color of the card
   */
  color: string,
  /**
   * Fired when the "switch" button is clicked
   */
  onAccountSwitch: func.isRequired
}

AccountCard.defaultProps = {
  color: 'white'
}

AccountCard.displayName = 'AccountCard'

export default AccountCard
