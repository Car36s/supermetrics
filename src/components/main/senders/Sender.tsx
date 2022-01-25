import { useCallback } from 'react'

interface Props {
  name: string
  id: string
  postsCount: number
  onSelectSender: (arg0: string) => void
}

const Sender = ({ name, id, postsCount, onSelectSender }: Props) => {
  const onClick = useCallback(() => onSelectSender(id), [id, onSelectSender])
  return (
    <button onClick={onClick}>
      {name}: {postsCount}
    </button>
  )
}

export default Sender
