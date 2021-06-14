import {Router} from 'routes/Router'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from 'styles/global'

import {theme} from './styles/theme'

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
)
