import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { postsSelector } from '../../store/posts/selectors'
import { Post as PostType } from '../../types/posts'
import Post from './posts/Post'

interface Props {
  selectedSender?: string
}

const Posts = ({ selectedSender = '' }: Props) => {
  const { posts } = useSelector(postsSelector)

  // @todo - pagination
  const [displayItems, setDisplayItems] = useState<PostType[]>()

  useEffect(() => {
    const displayItems = !selectedSender ? posts[1] : posts[1]?.filter(({ from_id }) => from_id === selectedSender)
    setDisplayItems(displayItems)
  }, [posts, selectedSender])

  if (!displayItems?.length) return null

  return (
    <div>
      {displayItems.map((postData) => (
        <Post {...postData} key={postData.id} />
      ))}
    </div>
  )
}

export default Posts
