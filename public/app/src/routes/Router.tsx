import {Home, Class} from '../pages'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Layout } from 'components/Layout'

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' children={<Home/>} />
          <Route exact path='/class' children={<Class/>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
