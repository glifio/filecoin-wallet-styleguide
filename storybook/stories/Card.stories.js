import React from 'react'
import {
  Box,
  Text,
  Glyph,
  Card
} from '@openworklabs/filecoin-wallet-styleguide'

export default {
  title: 'OnboardingCard'
}

export const LedgerOnboardingCard = () => (
  <Card>
    <Box display="flex" alignItems="center">
      <Glyph acronym="Ld" />
      <Text ml={3}>Ledger Device</Text>
    </Box>
    <Box display="block">
      <Text>Use Filament to access your Ledger device</Text>
    </Box>
  </Card>
)
