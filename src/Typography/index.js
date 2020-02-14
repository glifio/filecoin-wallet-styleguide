import styled from 'styled-components'
import { color, typography, layout, space } from 'styled-system'
import PropTypes from 'prop-types'

const { bigTitle, title, text, label } = theme.textStyles

export const BigTitle = props => (
  <BigTitle {...bigTitle} {...props}>
    {props.children}
  </BigTitle>
)

export const Title = props => (
  <Title {...title} {...props}>
    {props.children}
  </Title>
)

export const Text = props => (
  <Text {...text} {...props}>
    {props.children}
  </Text>
)

export const Label = props => (
  <Label {...label} {...props}>
    {props.children}
  </Label>
)

propTypes = {
  children: node.isRequired
}

export default styled.p`
  margin: 0;
  ${color}
  ${typography}
  ${layout}
  ${space}
`
