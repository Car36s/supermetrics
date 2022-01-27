import { useCallback } from 'react'
import styled from 'styled-components'
import { medium, xlarge } from '../../../lib/sizes'
import { SortOption } from '../../../types/posts'
import Button from '../../Button'
import Input from '../../Input'

const RightContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',

  '> div': {
    display: 'flex',
    [Button]: {
      minWidth: xlarge,
    },
  },
})

interface Props {
  setSort: (arg0: SortOption) => void
  className?: string
  setSendersFilter: (arg0: string) => void
  setPostsFilter: (arg0: string) => void
}

const ControlsComponent = ({ setSort, setSendersFilter, className, setPostsFilter }: Props) => {
  const setSortAsc = useCallback(() => setSort('asc'), [setSort])
  const setSortDesc = useCallback(() => setSort('desc'), [setSort])
  const onFilterSenders = useCallback((e) => setSendersFilter(e.target.value), [setSendersFilter])
  const onFilterPosts = useCallback((e) => setPostsFilter(e.target.value), [setPostsFilter])

  return (
    <div className={className}>
      <Input placeholder="search" type="text" onChange={onFilterSenders} />
      <RightContainer>
        <div>
          <Button onClick={setSortDesc}>&#8593;</Button>
          <Button onClick={setSortAsc}>&#8595;</Button>
        </div>
        <Input placeholder="search" type="text" onChange={onFilterPosts} />
      </RightContainer>
    </div>
  )
}

export default styled(ControlsComponent)({
  gridArea: 'controls',
  display: 'grid',
  gridTemplateColumns: '1fr 5fr',
  gridGap: medium,
  gridAutoFlow: 'column',

  [Input]: {
    textAlign: 'center',
  },
})
