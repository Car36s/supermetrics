import { useCallback } from 'react'
import styled from 'styled-components'
import Button from '../../Button'
import { small, xsmall } from '../../../lib/sizes'
import { darkGrayishBlue } from '../../../lib/colors'

const Count = styled.span({
  background: darkGrayishBlue,
  color: 'white',
  borderRadius: '50%',
  padding: small,
  height: small,
  width: small,
  fontSize: small,
})
interface Props {
  name: string
  id: string
  postsCount: number
  onSelectSender: (arg0: string) => void
  className?: string
}

const SenderComponent = ({ name, id, postsCount, onSelectSender, className }: Props) => {
  const onClick = useCallback(() => onSelectSender(id), [id, onSelectSender])
  return (
    <Button onClick={onClick} className={className}>
      <span>{name}</span>
      <Count>{postsCount}</Count>
    </Button>
  )
}

export default styled(SenderComponent)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: xsmall,
  alignItems: 'center',
})
