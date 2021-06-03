import Router from "routes/Router"
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from "styles/global"
import {theme} from './styles/theme'

import MenuNav  from './components/Layout/MenuNav/index';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MenuNav />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
