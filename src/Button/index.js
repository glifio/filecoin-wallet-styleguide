import React, { forwardRef } from 'react'
import { func, bool, string, oneOf } from 'prop-types'
import BaseButton from './BaseButton'

const colorMatcher = {
  color: {
    primary: 'core.nearblack',
    secondary: 'core.nearblack'
  },
  backgroundColor: {
    primary: 'background.button.primary',
    secondary: 'background.button.secondary'
  },
  borderColor: {
    primary: 'background.button.primary',
    secondary: 'core.darkgray'
  }
}

const Button = forwardRef(
  ({ type, disabled, onClick, title, ...props }, ref) => (
    <BaseButton
      py={3}
      px={4}
      fontSize={3}
      border={1}
      borderRadius={2}
      backgroundColor={colorMatcher.backgroundColor[type]}
      color={colorMatcher.color[type]}
      borderColor={colorMatcher.borderColor[type]}
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
  type: oneOf(['primary', 'secondary']),
  onClick: func.isRequired,
  title: string.isRequired,
  disabled: bool
}

Button.propTypes = ButtonPropTypes

Button.defaultProps = {
  type: 'primary'
}

export default Button
