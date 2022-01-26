import styled from 'styled-components'
import { medium, xsmall } from '../../../lib/sizes'
import { Post as PostProp } from '../../../types/posts'

const DatePosted = styled.div({
  paddingLeft: medium,
  display: 'flex',
  alignItems: 'center',
  boxShadow: ' 0 3px 0 0 rgb(1 1 1 / 20%)',
})

const Message = styled.div({
  padding: medium,
  boxShadow: ' 0 3px 0 0 rgb(1 1 1 / 20%)',
})

const Author = styled.div({
  padding: xsmall,
  textAlign: 'right',
  boxShadow: ' 0 3px 0 0 rgb(1 1 1 / 20%)',
})

interface Props extends PostProp {
  className?: string
}

const PostComponent = ({ message, from_name, created_time, className }: Props) => {
  return (
    <div className={className}>
      <DatePosted>{created_time}</DatePosted>
      <Message>{message}</Message>
      <Author>{from_name}</Author>
    </div>
  )
}

export default styled(PostComponent)({
  display: 'grid',
  gridTemplateRows: '32px 1fr 32px',
  backgroundColor: 'white',
})
