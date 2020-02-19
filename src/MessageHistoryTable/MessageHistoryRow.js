import React from 'react'
import { MESSAGE_PROPS } from '../customPropTypes'
import Box from '../Box'
import { Menu, MenuItem } from '../Menu'
import { Text, Label } from '../Typography'

const MessageHistoryRow = ({
  to,
  from,
  value,
  gasprice,
  gas_used,
  cid,
  status
}) => {
  return (
    <Box display="flex" border={1} p={2} justifyContent="space-between">
      <Menu>
        <MenuItem display="flex" flexDirection="row">
          <Menu display="flex" flexDirection="column">
            <MenuItem>
              <Text m={0}>{status}</Text>
            </MenuItem>
            <MenuItem>
              <Label my={2}>Date</Label>
            </MenuItem>
          </Menu>
          <Menu display="flex" flex-wrap="wrap" mx={3}>
            <MenuItem overflow="hidden" maxWidth={120}>
              <Text my={0}>To</Text>
              <Text my={2}>
                {to}
                {from}
              </Text>
            </MenuItem>
            {/* <MenuItem>
          <Label>{cid}</Label>
        </MenuItem> */}
          </Menu>
        </MenuItem>
      </Menu>
      <Menu display="flex" flexDirection="column" flex-wrap="wrap">
        <MenuItem display="flex">
          <Text my={0}>{value}</Text>
          <Text my={0} ml={2}>
            FIL
          </Text>
        </MenuItem>
        <MenuItem>
          <Text my={2}>fiat</Text>
        </MenuItem>
      </Menu>
    </Box>
  )
}

MessageHistoryRow.propTypes = MESSAGE_PROPS

export default MessageHistoryRow
