import { Switch, Route } from "react-router-dom"

// import { Switch } from "react-router-dom/cjs/react-router-dom.min"
// import { Route } from "react-router-dom/cjs/react-router-dom"

import LoginForm from "./components/LoginForm"
import Home from "./components/Home"
import NotFound from "./components/NotFound"

const App = () => (
    <div className='app-container'>
        <Switch>
          <Route exact path='/login' component={LoginForm}/>
          <Route exact path='/' component={Home}/>
          <Route component={NotFound}/>
        </Switch>
    </div>
)

export default App
