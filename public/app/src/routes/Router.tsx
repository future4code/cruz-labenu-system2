import {Home, Class} from '../pages'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' children={<Home/>} />
        <Route exact path='/class' children={<Class/>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
