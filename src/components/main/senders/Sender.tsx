import { useCallback } from 'react'
import Button from '../../Button'

interface Props {
  name: string
  id: string
  postsCount: number
  onSelectSender: (arg0: string) => void
}

const Sender = ({ name, id, postsCount, onSelectSender }: Props) => {
  const onClick = useCallback(() => onSelectSender(id), [id, onSelectSender])
  return (
    <Button onClick={onClick}>
      {name}: {postsCount}
    </Button>
  )
}

export default Sender
