import React, { forwardRef } from 'react'
import { func, bool, string, oneOf } from 'prop-types'
import BaseButton from './BaseButton'

const shouldShowBorder = buttonType => {
  if (buttonType.toLowerCase() === 'primary') {
    return false
  } else if (buttonType.toLowerCase() === 'secondary') {
    return true
  } else if (buttonType.toLowerCase() === 'triangle') {
    return true
  }
}

const colorMatcher = {
  color: {
    primary: 'darkGray',
    secondary: 'darkGray'
  },
  backgroundColor: {
    primary: 'success',
    secondary: 'white'
  },
  borderColor: {
    primary: 'darkGray',
    secondary: 'darkGray'
  }
}

const Button = forwardRef(
  ({ type, disabled, onClick, title, ...props }, ref) => (
    <BaseButton
      py={2}
      px={4}
      border={shouldShowBorder(type) ? 1 : 0}
      borderRadius={1}
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
  /* @ALEX how do we want to handle this? */
  disabled: bool
}

Button.propTypes = ButtonPropTypes

Button.defaultProps = {
  type: 'primary'
}

export default Button
