import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { medium, small, xsmall } from '../lib/sizes'

type Props = InputHTMLAttributes<HTMLInputElement>

const StyledInput = ({ ...props }: Props) => <input {...props} />

export default styled(StyledInput)({
  padding: xsmall,
  fontSize: medium,
})
