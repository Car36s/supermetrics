import styled from 'styled-components'
import Register from './components/Register'

const AppComponent = ({ className }: { className?: string }) => (
  <div className={className}>
    <Register />
    <header>Supermetrics</header>
  </div>
)

export default styled(AppComponent)({
  textAlign: 'center',
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  }
})
