import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { postsSelector } from '../../../store/posts/selectors'
import NoResults from './NoResults'

import Sender from './senders/Sender'

interface CountedSenders {
  name: string
  postsCount: number
}

interface Props {
  className?: string
  sendersFilter: string
}

const SendersComponent = ({ className, sendersFilter }: Props) => {
  const [senders, setSenders] = useState<
    {
      from_id: string
      name: string
      postsCount: number
    }[]
  >()

  const posts = useSelector(postsSelector)

  useEffect(() => {
    // @todo - pagination
    const senders = posts.posts[1]?.reduce<Record<string, CountedSenders>>((acc, { from_id, from_name }) => {
      acc[from_id] = { name: from_name, postsCount: (acc[from_id]?.postsCount ?? 0) + 1 }
      return acc
    }, {})

    const sortedSenders = Object.entries(senders ?? {})
      .map(([from_id, { name, postsCount }]) => ({
        from_id,
        name,
        postsCount,
      }))
      // Currently all names with capital letters.
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .filter(({ name }) => name.toLowerCase().includes(sendersFilter.toLowerCase()))

    setSenders(sortedSenders)
  }, [posts, sendersFilter])

  if (posts.isLoading) return <NoResults />
  if (!senders?.length) return null

  return (
    <div className={className}>
      {senders.map(({ from_id, name, postsCount }) => (
        <Sender key={from_id} from_id={from_id} name={name} postsCount={postsCount} />
      ))}
    </div>
  )
}

export default styled(SendersComponent)({
  gridArea: 'senders',
})
