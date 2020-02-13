import React, { forwardRef } from 'react'
import { func, bool, string } from 'prop-types'
import Box from '../Box'

const Card = forwardRef(({ ...props }, ref) => (
  <Box
    display="inline-block"
    width={300}
    p={3}
    border={1}
    borderRadius={2}
    borderWidth={1}
    color="text"
    overflow="hidden"
    ref={ref}
    {...props}
  />
))

const CardPropTypes = {}

Card.propTypes = CardPropTypes

Card.defaultProps = {
  /* @ALEX how do we want to handle this? */
}

export default Card
