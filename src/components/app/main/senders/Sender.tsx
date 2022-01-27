import styled from 'styled-components'
import Button from '../../../Button'
import { small, xsmall } from '../../../../lib/sizes'
import { darkGrayishBlue, grayishBlue, lightGrayishBlue } from '../../../../lib/colors'
import { Link, useParams } from 'react-router-dom'

const Count = styled.span({
  background: darkGrayishBlue,
  color: 'white',
  borderRadius: '50%',
  padding: small,
  height: small,
  width: small,
  fontSize: small,
})
interface Props {
  name: string
  from_id: string
  postsCount: number
  className?: string
}

const SenderComponent = ({ name, from_id, postsCount, className }: Props) => {
  const { filter } = useParams()

  const isActive = filter === from_id
  return (
    <Link to={`${isActive ? '/' : `/${from_id}`}`} className={className}>
      <Button isActive={isActive}>
        <span>{name}</span>
        <Count>{postsCount}</Count>
      </Button>
    </Link>
  )
}

export default styled(SenderComponent)({
  textDecoration: 'none',

  [Button]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: xsmall,
    alignItems: 'center',
    cursor: 'pointer',

    ':hover': {
      borderColor: grayishBlue,
      backgroundColor: lightGrayishBlue,
    },
  },
})
