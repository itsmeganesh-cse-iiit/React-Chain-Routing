import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink} from 'react-router-dom'
import Login from './components/Login'
// import Signup from 'components/SignUp/SignUp'

function App() {
  return (
    <div className="App">
    <NavLink activeClassName="active" to="/login">Login</NavLink><br/>
    <NavLink activeClassName="active" to="/signup">Signup</NavLink><br/>
    <NavLink activeClassName="active" to="/users">Users</NavLink><br/>

    </div>
  );
}

export default App;
