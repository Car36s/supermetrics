import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { medium } from '../../../lib/sizes'
import { postsSelector } from '../../../store/posts/selectors'
import { Post as PostType, SortOption } from '../../../types/posts'
import Post from './posts/Post'

interface Props {
  sort: SortOption
  className?: string
  postsFilter: string
}

const sorter: Record<SortOption, number[]> = {
  asc: [1, -1],
  desc: [-1, 1],
}

const PostsComponent = ({ sort, className, postsFilter }: Props) => {
  const { posts } = useSelector(postsSelector)
  const { filter } = useParams()

  // @todo - pagination
  const [displayItems, setDisplayItems] = useState<PostType[]>()

  useEffect(() => {
    const filteredItems = !filter ? posts[1] : posts[1]?.filter(({ from_id }) => from_id === filter)
    const sortedDisplayItems = filteredItems
      ?.sort((a, b) => (a.created_time > b.created_time ? sorter[sort][0] : sorter[sort][1]))
      .filter(({ message }) => message.toLowerCase().includes(postsFilter.toLowerCase()))
    // create copy of items since sort just mutates original and updates may not happen
    setDisplayItems(sortedDisplayItems?.slice(0))
  }, [posts, filter, sort, postsFilter])

  if (!displayItems?.length) return null

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
})
