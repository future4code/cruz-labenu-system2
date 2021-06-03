import Router from "./routes/Router"
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

import MenuNav from './components/MenuNav';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MenuNav />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
