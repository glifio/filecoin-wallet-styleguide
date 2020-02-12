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
    <Box display="block" mt={3}>
      <Text>Use Filament to access your Ledger device</Text>
    </Box>
  </Card>
)

export const OnboardingStepCard = () => (
  <Card>
    <Box display="flex" alignItems="center">
      <Glyph acronym="Ld" />
      <Text ml={3}>Step 1</Text>
    </Box>
    <Box display="block" mt={3}>
      <Text>
        Please complete the following steps so Filament can interface with your
        Ledger device
      </Text>
    </Box>
  </Card>
)
