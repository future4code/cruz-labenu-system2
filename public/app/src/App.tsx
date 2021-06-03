import Router from "routes/Router"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "styles/global"

import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
