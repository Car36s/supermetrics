import { useCallback } from 'react'
import { SortOption } from '../../types/posts'

interface Props {
  setSort: (arg0: SortOption) => void
}

const Controls = ({ setSort }: Props) => {
  const setSortAsc = useCallback(() => setSort('asc'), [setSort])
  const setSortDesc = useCallback(() => setSort('desc'), [setSort])

  return (
    <div>
      <button onClick={setSortDesc}>Newer first</button>
      <button onClick={setSortAsc}>Older first</button>
    </div>
  )
}

export default Controls
