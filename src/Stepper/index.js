import React, { forwardRef } from 'react'
import { string, number } from 'prop-types'
import { Text, Box } from '../'

const Stepper = forwardRef(
  (
    {
      textColor,
      completedDotColor,
      incompletedDotColor,
      step,
      totalSteps,
      ...props
    },
    ref
  ) => (
    <Box display="flex" ref={ref} {...props}>
      <Text mr={2}>Step {step}</Text>
      {new Array(totalSteps).fill(true).map((_, i) => (
        <Box display="flex" alignItems="center">
          {step <= i + 1 ? (
            <Box
              display="inline-block"
              width={2}
              height={2}
              mx={1}
              borderRadius={100}
              backgroundColor={incompletedDotColor}
            ></Box>
          ) : (
            <Box
              display="inline-block"
              width={12}
              height={12}
              mx={1}
              borderRadius={100}
              backgroundColor={completedDotColor}
            ></Box>
          )}
        </Box>
      ))}
    </Box>
  )
)

Stepper.propTypes = {
  /**
   * Color of the "Step <step>" text
   */
  textColor: string.isRequired,
  /**
   * The colorr of the complete step dots
   */
  completedDotColor: string.isRequired,
  /**
   * The color of incomplete step dots
   */
  incompletedDotColor: string.isRequired,
  /**
   * What step the user is on (1 indexed)
   */
  step: number.isRequired,
  /**
   * Total steps the user should take (1 indexed)
   */
  totalSteps: number.isRequired
}

export default Stepper
