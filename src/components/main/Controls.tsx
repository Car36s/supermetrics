import { useCallback } from 'react'
import styled from 'styled-components'
import { SortOption } from '../../types/posts'
import Button from '../Button'
import Input from '../Input'

interface Props {
  setSort: (arg0: SortOption) => void
  className?: string
}

const ControlsComponent = ({ setSort, className }: Props) => {
  const setSortAsc = useCallback(() => setSort('asc'), [setSort])
  const setSortDesc = useCallback(() => setSort('desc'), [setSort])

  return (
    <div className={className}>
      <Input placeholder="search" />
      <Button onClick={setSortDesc}>Newer first</Button>
      <Button onClick={setSortAsc}>Older first</Button>
      <Input placeholder="search" />
    </div>
  )
}

export default styled(ControlsComponent)({
  gridArea: 'controls',
})
