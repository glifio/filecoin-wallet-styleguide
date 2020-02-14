import React, { forwardRef } from 'react'
import { string } from 'prop-types'
import { Text } from '../Typography'
import colors from '../colors'
import Box from '../Box'

const Glyph = forwardRef(({ acronym, color, ...props }, ref) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    size={6}
    borderWidth={3}
    borderStyle={0}
    color={color}
    ref={ref}
    {...props}
  >
    <Text>{acronym}</Text>
  </Box>
))

Glyph.propTypes = {
  /**
   * The two letters displayed in the glyph
   */
  acronym: string.isRequired,
  /**
   * The color of the text and border
   */
  color: string
}

Glyph.defaultProps = {
  color: colors.purplelight
}

export default Glyph
