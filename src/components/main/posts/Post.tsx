import styled from 'styled-components'
import { medium, xlarge, xsmall } from '../../../lib/sizes'
import { Post as PostProp } from '../../../types/posts'

const DatePosted = styled.div({
  paddingLeft: medium,
  display: 'flex',
  alignItems: 'center',
})

const Message = styled.div({
  padding: medium,
})

const Author = styled.div({
  padding: xsmall,
  textAlign: 'right',
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
  gridTemplateRows: `${xlarge} 1fr ${xlarge}`,
  backgroundColor: 'white',

  '> *': {
    boxShadow: ' 0 3px 0 0 rgb(1 1 1 / 20%)',
  },
})
