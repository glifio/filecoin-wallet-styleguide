import React from 'react'
import { MESSAGE_PROPS } from '../customPropTypes'
import Box from '../Box'
import { Menu, MenuItem } from '../Menu'
import { Text, Label } from '../Typography'
import { IconSend, IconReceive } from '../Icons'

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
              {/* @jon - Todo - Map {status} to Icon prop color
              <Text m={0}>{status}</Text> */}
              <IconSend />
            </MenuItem>
          </Menu>
          <Menu display="flex" flexDirection="column" ml={3}>
            <MenuItem>
              <Text my={0}>Sending</Text>
            </MenuItem>
            <MenuItem>
              <Text mt={2} mb={0}>
                Date
              </Text>
            </MenuItem>
          </Menu>
          <Menu display="flex" flex-wrap="wrap" ml={3}>
            <MenuItem overflow="hidden" maxWidth={120}>
              <Text my={0}>To</Text>
              <Text mt={2} mb={0}>
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
      <Menu display="flex" flexDirection="row">
        <MenuItem>
          <Menu
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            flex-wrap="wrap"
            ml={3}
          >
            <MenuItem display="flex">
              <Text my={0}>{value}</Text>
            </MenuItem>
            <MenuItem display="flex">
              <Text mt={2} mb={0}>
                500
              </Text>
            </MenuItem>
          </Menu>
        </MenuItem>
        <MenuItem>
          <Menu
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            flex-wrap="wrap"
            ml={3}
          >
            <MenuItem>
              <Text my={0}>FIL</Text>
              <Text mt={2} mb={0}>
                Fiat
              </Text>
            </MenuItem>
          </Menu>
        </MenuItem>
      </Menu>
    </Box>
  )
}

MessageHistoryRow.propTypes = MESSAGE_PROPS

export default MessageHistoryRow
