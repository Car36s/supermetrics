import { Post as PostProp } from '../../../types/posts'

type Props = PostProp

const Post = ({ message, from_name, created_time }: Props) => {
  return (
    <div>
      <div>{from_name}</div>
      <div>{message}</div>
      <div>{created_time}</div>
    </div>
  )
}

export default Post
