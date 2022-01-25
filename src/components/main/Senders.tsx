import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { postsSelector } from '../../store/posts/selectors'
import { PostCounts } from '../../types/posts'
import Sender from './senders/Sender'

interface Props {
  onSelectSender: (arg0: string) => void
}
const Senders = ({ onSelectSender }: Props) => {
  const [senders, setSenders] = useState<PostCounts>()
  const { posts } = useSelector(postsSelector)

  useEffect(() => {
    // @todo - pagination
    const senders = posts[1]?.reduce<PostCounts>((acc, { from_id, from_name }) => {
      acc[from_id] = { name: from_name, postsCount: (acc[from_id]?.postsCount ?? 0) + 1 }
      return acc
    }, {})

    setSenders(senders)
  }, [posts])

  if (!senders || !Object.keys(senders).length) return null

  return (
    <div>
      {Object.entries(senders).map(([from_id, { name, postsCount }]) => (
        <Sender key={from_id} id={from_id} name={name} postsCount={postsCount} onSelectSender={onSelectSender} />
      ))}
    </div>
  )
}

export default Senders
