import { Route, Routes } from 'react-router-dom'
import Main from './app/Main'
import Register from './app/Register'

const App = ({ className }: { className?: string }) => (
  <div className={className}>
    <Register />
    <Routes>
      <Route path="/:senderFilter" element={<Main />} />
      <Route path="/" element={<Main />} />
    </Routes>
  </div>
)

export default App
