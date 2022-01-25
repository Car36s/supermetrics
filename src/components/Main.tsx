import { useCallback, useState } from 'react'

import Controls from './main/Controls'
import Posts from './main/Posts'
import Senders from './main/Senders'

const Main = (): JSX.Element => {
  const [selectedSender, setSelectedSender] = useState<string>()

  const onSelectSender = useCallback(
    (from_id) =>
      setSelectedSender((current) => {
        if (current === from_id) return ''
        return from_id
      }),
    []
  )

  return (
    <main>
      <Controls />
      <Senders onSelectSender={onSelectSender} />
      <Posts selectedSender={selectedSender} />
    </main>
  )
}

export default Main
