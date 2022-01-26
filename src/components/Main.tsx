import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { medium, xlarge } from '../lib/sizes'
import { userSelector } from '../store/user/selectors'
import { SortOption } from '../types/posts'

import Controls from './main/Controls'
import Posts from './main/Posts'
import Senders from './main/Senders'

const MainComponent = ({ className }: { className?: string }): JSX.Element | null => {
  const [selectedSender, setSelectedSender] = useState<string>()
  const [sort, setSort] = useState<SortOption>('desc')
  const { sl_token } = useSelector(userSelector)

  const onSelectSender = useCallback(
    (from_id) =>
      setSelectedSender((current) => {
        if (current === from_id) return ''
        return from_id
      }),
    []
  )

  if (!sl_token) return null

  return (
    <main className={className}>
      <Controls setSort={setSort} />
      <Senders onSelectSender={onSelectSender} />
      <Posts selectedSender={selectedSender} sort={sort} />
    </main>
  )
}

export default styled(MainComponent)({
  padding: medium,
  display: 'grid',
  gridGap: medium,
  gridTemplateColumns: '1fr 5fr',
  gridTemplateRows: xlarge,
  gridTemplateAreas: `
  "controls controls"
  "senders posts"
  "senders posts"`,
})
