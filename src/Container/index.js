import React, { forwardRef } from 'react'
import Box from '../Box'

export default forwardRef(({ ...props }, ref) => (
  // @ALEX - some sweet responsiveness perks with s-s https://styled-system.com/responsive-styles
  <Box ref={ref} {...props} mt="20px" ml="20vw" mr="20vw" />
))
