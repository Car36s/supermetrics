import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getPostsFilteredByText, getPostsFilteredBySenderId, getSortedPosts } from '../../../lib/posts'
import { medium } from '../../../lib/sizes'
import { postsSelector } from '../../../store/posts/selectors'
import { SortOption } from '../../../types/posts'
import NoResults from './NoResults'
import Post from './posts/Post'

interface Props {
  sort: SortOption
  className?: string
  postsFilter: string
}

const PostsComponent = ({ sort, className, postsFilter }: Props) => {
  const { posts } = useSelector(postsSelector)
  const { senderFilter = '' } = useParams()

  /** @todo - pagination */
  const filteredBySender = useMemo(() => getPostsFilteredBySenderId(posts[1], senderFilter), [senderFilter, posts])

  const filteredByText = useMemo(
    () => getPostsFilteredByText(filteredBySender, postsFilter),
    [filteredBySender, postsFilter]
  )

  const displayItems = getSortedPosts(filteredByText, sort)

  if (!displayItems?.length) {
    if (senderFilter || postsFilter) return <NoResults />
    return null
  }

  return (
    <div className={className}>
      {displayItems.map((postData) => (
        <Post {...postData} key={postData.id} />
      ))}
    </div>
  )
}

export default styled(PostsComponent)({
  gridArea: 'posts',
  display: 'grid',
  gridGap: medium,
  gridAutoRows: 'max-content',
})
