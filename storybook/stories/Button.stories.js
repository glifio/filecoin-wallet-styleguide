import React from 'react'
import { Button } from '@openworklabs/filecoin-wallet-styleguide'

export default {
  title: 'Button'
}

export const Primary = () => (
  <Button
    title="Primary Button"
    buttonStyle="primary"
    onClick={e => console.log(e.target.value)}
  />
)

export const Secondary = () => (
  <Button
    title="Secondary Button"
    buttonStyle="secondary"
    onClick={e => console.log(e.target.value)}
  />
)

export const DisabledPrimary = () => (
  <Button title="Disabled" buttonStyle="primary" disabled onClick={() => {}} />
)
