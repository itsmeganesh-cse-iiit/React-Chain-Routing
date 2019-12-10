import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route,NavLink, BrowserRouter as Router,Switch } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Users from './components/Users'
import NotFound from './components/NotFound'

const router =(
  <Router>
  <div>
    <NavLink activeClassName="active" to="/login">Login</NavLink><br/>
    <NavLink activeClassName="active" to="/signup">Signup</NavLink><br/>
    <NavLink activeClassName="active" to="/users">Users</NavLink><br/>
    <Switch>
    <Route  exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route  path="/users" component={Users} />
    <Route component={NotFound} />
    </Switch>
  </div>
  </Router>
)
ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
