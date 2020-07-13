import React, {Component} from 'react'
import {Redirect, Route} from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import {connect} from "react-redux";
import {_SESSION} from "../../actions/session";

class ProtectedRoute extends Component {
  render() {
    const {component: Component, render, ...rest} = this.props
    return (
      <Route
        {...rest}
        exact
        render={props => {
          const session = sessionStorage.getItem(_SESSION)
          console.log(session)
          if (session === null) {
            return <Redirect to={{pathname:'/login', state: {from: this.props.path}}}/>
          }
          return Component ? <Component {...props}/> : render(props)
        }}/>
    )
  }
}

export default ProtectedRoute