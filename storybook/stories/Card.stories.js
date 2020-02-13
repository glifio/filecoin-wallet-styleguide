import React from 'react'
import {
  Box,
  Text,
  Title,
  Glyph,
  Card,
  Stepper
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
  <Card
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    borderColor="silver"
    height={300}
  >
    <Box display="flex" alignItems="center">
      <Glyph acronym="Ld" />
      <Stepper
        textColor="text"
        completedDotColor="green"
        incompletedDotColor="silver"
        step={1}
        totalSteps={3}
        ml={4}
      >
        Step 1
      </Stepper>
    </Box>
    <Box display="block" mt={3}>
      <Text>
        Please complete the following steps so Filament can interface with your
        Ledger device
      </Text>
    </Box>
  </Card>
)

export const OnboardingHelperCard = () => (
  <Card
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    borderColor="silver"
    height={300}
  >
    <Box display="flex" alignItems="center">
      <Title>First</Title>
    </Box>
    <Box display="block" mt={3}>
      <Text>Please connect your Ledger to your computer.</Text>
    </Box>
  </Card>
)
