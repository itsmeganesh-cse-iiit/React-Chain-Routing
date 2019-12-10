import React from 'react'
import {Route,NavLink} from 'react-router-dom'
const User = ({ match }) => <p>{match.params.id}</p>

 export default function Users(){

  return (
    <>
    <h2>Users</h2>
    <hr/>
    <div>
    <NavLink activeClassName="active" to="/users/1">Users 1 </NavLink><br/>
    <NavLink activeClassName="active" to="/users/2">Users 2 </NavLink><br/>
    <NavLink activeClassName="active" to="/users/3">Users 3 </NavLink><br/>

    <Route component={User} path="/users/:id" />
    </div>


    </>
  )
}
