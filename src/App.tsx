import Main from './components/Main'
import Register from './components/Register'

const App = ({ className }: { className?: string }) => (
  <div className={className}>
    <header>Supermetrics</header>
    <Register />
    <Main />
  </div>
)

export default App
