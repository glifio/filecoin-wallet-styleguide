import React, { forwardRef } from 'react'
import { string, func } from 'prop-types'
import { ADDRESS_PROPTYPE } from '../customPropTypes'
import Box from '../Box'
import Glyph from '../Glyph'
import ButtonBase from '../ButtonBase'
import { BigTitle, Text } from '../Typography'

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
      color="card.account.color"
      bg="card.account.background"
      boxShadow={1}
      ref={ref}
      {...props}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        color="card.account.color"
      >
        <Glyph mr={3} color="card.account.color" acronym="Ac" />
        <Text>Account</Text>
      </Box>
      <Box color="card.account.color">
        <BigTitle>{alias}</BigTitle>
        <Text margin={0}>{truncate(address)}</Text>
      </Box>
      <Box display="flex">
        <ButtonBase
          onClick={onAccountSwitch}
          color="core.secondary"
          borderColor="card.account.color"
          p={2}
        >
          Switch
        </ButtonBase>
        <ButtonBase
          title="View on Ledger"
          onClick={onAccountSwitch}
          color="card.account.color"
          borderColor="card.account.color"
          ml={2}
          p={2}
        >
          View on Ledger Device
        </ButtonBase>
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
