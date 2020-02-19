import React from 'react'
import { MESSAGE_PROPS } from '../customPropTypes'
import { Box } from '../Box'
import { Menu, MenuItem } from '../Menu'
import { Text, Label } from '../Typography'

const MessageRow = ({ to, from, value, gasprice, gas_used, cid, status }) => {
  return (
    <Box>
      <Menu>
        <MenuItem>
          <Text>{status}</Text>
        </MenuItem>
        <MenuItem>
          <Label>Date</Label>
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem>
          <Text>
            {to}
            {from}
          </Text>
        </MenuItem>
        <MenuItem>
          <Label>{cid}</Label>
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem>{value}</MenuItem>
        <MenuItem>fiat</MenuItem>
      </Menu>
      All the things
    </Box>
  )
}

MessageRow.propTypes = MESSAGE_PROPS

export default MessageRow
