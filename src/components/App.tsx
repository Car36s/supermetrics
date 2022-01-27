import Main from './Main'
import Register from './Register'

const App = ({ className }: { className?: string }) => (
  <div className={className}>
    <Register />
    <Main />
  </div>
)

export default App
