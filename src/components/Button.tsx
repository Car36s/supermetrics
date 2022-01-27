import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { lightGrayishBlue } from '../lib/colors'
import { xxsmall, xsmall, xxxsmall, medium } from '../lib/sizes'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
}

/** Just ignore unused props for now, @todo - filter-non-dom-props tms? */
const StyledButton = ({ isActive, ...props }: Props) => <button {...props} />

export default styled(StyledButton)(
  {
    padding: xsmall,
    borderRadius: xxsmall,
    borderWidth: xxxsmall,
    fontSize: medium,
  },
  ({ isActive }) => isActive && { backgroundColor: lightGrayishBlue, borderColor: 'black' }
)
