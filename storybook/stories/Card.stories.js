import React from 'react'
import { Box, Text } from '@openworklabs/filecoin-wallet-styleguide'

export default {
  title: 'Card'
}

export const LedgerOnboardingCard = () => (
  <Box display="inline-block" p={3} border={1} borderRadius={2} color="text">
    <Box display="flex" alignItems="center">
      <Box border={1} height={32} width={32} border={3}>
        Ld
      </Box>
      <Text>Ledger Device</Text>
    </Box>
    <Box display="block">
      <Text>Use Filament to access your Ledger device</Text>
    </Box>
  </Box>
)
