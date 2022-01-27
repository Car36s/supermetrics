import styled from 'styled-components'
import { medium } from '../../../../lib/sizes'

const NoResultsComponent = ({ className }: { className?: string }) => (
  <div className={className}>
    <h2>No posts =(</h2>
    <p>relax search filters</p>
  </div>
)

export default styled(NoResultsComponent)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100px',
  backgroundColor: 'white',
  alignItems: 'center',

  h2: {
    margin: `${medium} 0`,
  },
  p: {
    margin: 0,
  },
})
