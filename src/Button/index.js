import React, { forwardRef } from 'react'
import { func, bool, string } from 'prop-types'
import { BaseButton } from '../'

const Button = forwardRef(
  ({ type, disabled, onClick, title, ...props }, ref) => (
    <BaseButton
      py={2}
      px={4}
      borderRadius={1}
      backgroundColor={type}
      color={type}
      borderColor={type}
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
  primary: bool,
  secondary: bool,
  onClick: func.isRequired,
  title: string.isRequired,
  /* @ALEX how do we want to handle this? */
  disabled: bool
}

Button.propTypes = ButtonPropTypes

Button.defaultProps = {
  primary: true, //sets primary to default button
  secondary: false
}

// We can hardcode props to make named Button exports
Button.Primary = ({ ...props }) => <Button {...props} />
Button.Secondary = ({ ...props }) => <Button {...props} />

Button.Primary.propTypes = ButtonPropTypes
Button.Secondary.propTypes = ButtonPropTypes
// ...

export default Button
