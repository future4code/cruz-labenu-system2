import Router from "routes/Router"
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from "styles/global"
import {theme} from './styles/theme'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
