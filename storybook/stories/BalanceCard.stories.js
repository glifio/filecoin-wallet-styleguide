import React from 'react'
import { BalanceCard } from '@openworklabs/filecoin-wallet-styleguide'

export default {
  title: 'BalanceCard'
}

export const EnabledButtons = () => (
  <BalanceCard
    balance="10"
    onSend={() => {
      console.log('sending')
    }}
    onReceive={() => {
      console.log('receiving')
    }}
    disableButtons={false}
  />
)

export const PrimaryExample = () => (
  <BalanceCard
    balance="10"
    onSend={() => {
      console.log('sending')
    }}
    onReceive={() => {
      console.log('receiving')
    }}
    disableButtons
  />
)
