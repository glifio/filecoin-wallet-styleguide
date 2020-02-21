import React, { forwardRef } from 'react'
import { func, bool, string, oneOf } from 'prop-types'
import BaseButton from './BaseButton'

const Button = forwardRef(
  ({ buttonStyle, disabled, onClick, title, ...props }, ref) => (
    <BaseButton
      buttonStyle={buttonStyle}
      py={3}
      px={4}
      fontSize={3}
      borderRadius={2}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {title}
    </BaseButton>
  )
)

const ButtonPropTypes = {
  buttonStyle: oneOf(['primary', 'secondary']),
  onClick: func.isRequired,
  title: string.isRequired,
  disabled: bool
}

Button.propTypes = ButtonPropTypes

Button.defaultProps = {
  buttonStyle: 'primary'
}

export default Button
