import React, { useState } from 'react'
import FilecoinNumber from '@openworklabs/filecoin-number'
import { Input } from '@openworklabs/filecoin-wallet-styleguide'

export default {
  title: 'Input'
}

export const Text = () => {
  const [value, setValue] = useState('')
  return (
    <Input.Text
      onChange={e => setValue(e.target.value)}
      value={value}
      label="A text label"
      placeholder="A text input"
    />
  )
}

export const TextWithError = () => {
  const [value, setValue] = useState('')
  return (
    <Input.Text
      onChange={e => setValue(e.target.value)}
      value={value}
      label="A text label"
      placeholder="A text input"
      error="Invalid Address. Please try again."
    />
  )
}

export const Address = () => {
  const [value, setValue] = useState('')
  return (
    <Input.Address
      onChange={e => setValue(e.target.value)}
      value={value}
      label="TO"
      placeholder="t1..."
    />
  )
}

export const Funds = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  return (
    <Input.Funds
      onAmountChange={filecoinAmount => setValue(filecoinAmount)}
      value={value}
      label="AMOUNT"
      placeholder="0 FIL"
      error={error}
      setError={setError}
      balance={new FilecoinNumber('1000', 'fil')}
    />
  )
}
