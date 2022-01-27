import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { medium, xlarge } from '../../lib/sizes'
import { userSelector } from '../../store/user/selectors'
import { SortOption } from '../../types/posts'

import Controls from './main/Controls'
import Posts from './main/Posts'
import Senders from './main/Senders'

const MainComponent = ({ className }: { className?: string }): JSX.Element | null => {
  const params = useParams()
  console.log(params)

  const [selectedSender, setSelectedSender] = useState<string>()
  const [sort, setSort] = useState<SortOption>('desc')

  const [sendersFilter, setSendersFilter] = useState<string>('')
  const [postsFilter, setPostsFilter] = useState<string>('')

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
      <Controls setSort={setSort} setSendersFilter={setSendersFilter} setPostsFilter={setPostsFilter} />
      <Senders onSelectSender={onSelectSender} sendersFilter={sendersFilter} />
      <Posts selectedSender={selectedSender} sort={sort} postsFilter={postsFilter} />
    </main>
  )
}

export default styled(MainComponent)({
  padding: medium,
  display: 'grid',
  gridGap: medium,
  gridTemplateColumns: '2fr 9fr',
  gridTemplateRows: xlarge,
  gridTemplateAreas: `
  "controls controls"
  "senders posts"
  "senders posts"`,
})
