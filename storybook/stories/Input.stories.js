import React, { useState } from 'react'
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
      error="naht today junior!"
    />
  )
}

export const Address = () => {
  const [value, setValue] = useState('')
  return (
    <Input.Text
      onChange={e => setValue(e.target.value)}
      value={value}
      label="TO"
      placeholder="t1..."
    />
  )
}

export const Funds = () => {
  const [value, setValue] = useState('')
  return (
    <Input.Text
      onChange={e => setValue(e.target.value)}
      value={value}
      label="AMOUNT"
      placeholder="0 FIL"
    />
  )
}
