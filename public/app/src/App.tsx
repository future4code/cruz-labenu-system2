import './App.css';
import Home from './components/MenuNav';
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Router />
    </BrowserRouter>
  );
}

export default App;
