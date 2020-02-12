import React, { forwardRef } from 'react'
import { string, number } from 'prop-types'

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
    <div ref={ref} {...props}>
      <div>Step {step}</div>
      {new Array(totalSteps).fill(true).map((_, i) => (
        <span>
          {step <= i + 1 ? (
            <div>Incomplete step</div>
          ) : (
            <div>Complete step</div>
          )}
        </span>
      ))}
    </div>
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
