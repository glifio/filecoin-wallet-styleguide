import React, { forwardRef } from 'react'
import { func, bool, string, oneOf } from 'prop-types'
import BaseButton from './BaseButton'

const colorMatcher = {
  color: {
    primary: 'successtext',
    secondary: 'darkGray'
  },
  backgroundColor: {
    primary: 'success',
    secondary: 'transparent'
  },
  borderColor: {
    primary: 'success',
    secondary: 'silver'
  }
}

const Button = forwardRef(
  ({ type, disabled, onClick, title, ...props }, ref) => (
    <BaseButton
      py={2}
      px={4}
      border={1}
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
