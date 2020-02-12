import React, { forwardRef } from 'react'
import { func, bool, string } from 'prop-types'

const Button = forwardRef(
  ({ disabled, onClick, title, size, ...props }, ref) => (
    <button onClick={onClick} disabled={disabled} ref={ref} {...props}>
      {title}
    </button>
  )
)

const ButtonPropTypes = {
  onClick: func.isRequired,
  title: string.isRequired,
  /* @ALEX how do we want to handle this? */
  size: string,
  disabled: bool
}

Button.propTypes = ButtonPropTypes

Button.defaultProps = {
  /* @ALEX how do we want to handle this? */
}

// We can hardcode props to make named Button exports
Button.Primary = ({ ...props }) => <Button {...props} />
Button.Secondary = ({ ...props }) => <Button {...props} />

Button.Primary.propTypes = ButtonPropTypes
Button.Secondary.propTypes = ButtonPropTypes
// ...

export default Button
