import {Home, Class} from '../pages'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Layout} from 'components/Layout'
import {Students} from 'pages/Students'
import {Teachers} from 'pages/Teachers'

export const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' children={<Home />} />
        <Route exact path='/class' children={<Class />} />
        <Route exact path='/students' children={<Students />} />
        <Route exact path='/teachers' children={<Teachers />} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
