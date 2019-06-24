import React, { Component } from 'react'
import Dashboard from './component/Dashboard'
import Login from './component/Route/Login'
import {BrowserRouter as Router ,Route, Redirect, } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div className="bg-lighter">
        <Router>
          <div className="container">
            <Route  path = "/dashboard/" component={()=>localStorage.token == null ? <Redirect to="/" /> :  <Dashboard /> }  />
            <Route exact path="/" component={Login} />
          </div>
        </Router>
      </div>
    )
  }
}

export default Main
