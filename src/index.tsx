import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import store from './store'
import { createGlobalStyle } from 'styled-components'
import { grayishBlue } from './lib/colors'
import { medium } from './lib/sizes'
import { BrowserRouter } from 'react-router-dom'

const GlobalStyles = createGlobalStyle({
  html: {
    width: `calc(100vw - ${medium})`, // Prevent page width change when scrollbar comes and goes
  },
  body: {
    backgroundColor: grayishBlue,
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  code: {
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
