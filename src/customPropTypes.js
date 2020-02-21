import { validateAddressString } from '@openworklabs/filecoin-address'
import { string, shape, number } from 'prop-types'

export const ADDRESS_PROPTYPE = (props, propName, componentName) => {
  if (!validateAddressString(props[propName]))
    return new Error(
      'Invalid prop `' +
        propName +
        '` supplied to' +
        ' `' +
        componentName +
        '`. Validation failed.'
    )

  return null
}

export const FILECOIN_NUMBER_PROP = (props, propName, componentName) => {
  // instanceof prop checking is broken in nextjs on server side render cycles
  const representsANum = Number.isNaN(Number(props[propName].toString()))
  const hasFilecoinNumMethods = !!(
    props[propName].toFil && props[propName].toAttoFil
  )
  if (!(representsANum || hasFilecoinNumMethods))
    return new Error(
      `Invalid prop: ${propName} supplied to ${componentName}. Validation failed.`
    )

  return null
}

export const MESSAGE_PROPS = {
  /**
   * Message sent to this address
   */
  to: ADDRESS_PROPTYPE,
  /**
   * Message sent from this address
   */
  from: ADDRESS_PROPTYPE,
  /**
   * The amount of FIL sent in the message
   */
  value: string.isRequired,
  /**
   * Gas price set in the message
   */
  gasprice: string.isRequired,
  /**
   * Amount of gas used in the message (not required for pending transactions)
   */
  gas_used: number,
  /**
   * The message's cid
   */
  cid: string.isRequired,
  /**
   * Either pending or confirmed
   */
  status: string.isRequired
}
