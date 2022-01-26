import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { xxsmall, xsmall, xxxsmall, medium } from '../lib/sizes'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = ({ ...props }: Props) => <button {...props} />

export default styled(StyledButton)({
  padding: xsmall,
  borderRadius: xxsmall,
  borderWidth: xxxsmall,
  fontSize: medium,
})
