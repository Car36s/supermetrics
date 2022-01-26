import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { postsSelector } from '../../store/posts/selectors'
import { Post as PostType, SortOption } from '../../types/posts'
import Post from './posts/Post'

interface Props {
  selectedSender?: string
  sort: SortOption
  className?: string
}

const sorter: Record<SortOption, number[]> = {
  asc: [1, -1],
  desc: [-1, 1],
}

const PostsComponent = ({ selectedSender = '', sort, className }: Props) => {
  const { posts } = useSelector(postsSelector)

  // @todo - pagination
  const [displayItems, setDisplayItems] = useState<PostType[]>()

  useEffect(() => {
    const filteredItems = !selectedSender ? posts[1] : posts[1]?.filter(({ from_id }) => from_id === selectedSender)
    const sortedDisplayItems = filteredItems?.sort((a, b) =>
      a.created_time > b.created_time ? sorter[sort][0] : sorter[sort][1]
    )
    // create copy of items since sort just mutates original and updates may not happen
    setDisplayItems(sortedDisplayItems?.slice(0))
  }, [posts, selectedSender, sort])

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
})