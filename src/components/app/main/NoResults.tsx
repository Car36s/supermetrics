import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { medium } from '../../../lib/sizes'
import { postsSelector } from '../../../store/posts/selectors'
import Spinner from '../../Spinner'

const NoResultsComponent = ({ className }: { className?: string }) => {
  const { isLoading } = useSelector(postsSelector)
  return (
    <div className={className}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2>No posts =(</h2>
          <p>relax search filters</p>
        </>
      )}
    </div>
  )
}

export default styled(NoResultsComponent)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100px',
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',

  h2: {
    margin: `${medium} 0`,
  },
  p: {
    margin: 0,
  },
})
