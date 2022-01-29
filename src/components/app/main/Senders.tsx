import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getFilteredSenders, getSendersWithPostCounts, getSoretedSenders } from '../../../lib/senders'
import { postsSelector } from '../../../store/posts/selectors'
import NoResults from './NoResults'

import Sender from './senders/Sender'

interface Props {
  className?: string
  sendersFilter: string
}

const SendersComponent = ({ className, sendersFilter }: Props) => {
  const posts = useSelector(postsSelector)

  const senders = useMemo(() => {
    // @todo - pagination
    const sendersWithPostCounts = getSendersWithPostCounts(posts.posts[1])
    return getSoretedSenders(sendersWithPostCounts)
  }, [posts])

  const displayItems = useMemo(() => getFilteredSenders(senders, sendersFilter), [senders, sendersFilter])

  if (posts.isLoading) return <NoResults />
  if (!displayItems?.length) return null

  return (
    <div className={className}>
      {displayItems.map(({ from_id, name, postsCount }) => (
        <Sender key={from_id} from_id={from_id} name={name} postsCount={postsCount} />
      ))}
    </div>
  )
}

export default styled(SendersComponent)({
  gridArea: 'senders',
})
