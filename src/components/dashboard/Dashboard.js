/*
// prettier json
let text = this.state.text
text = JSON.parse(text)
let pretty = JSON.stringify(text, undefined, 4)
this.setState({
  text: pretty,
})*/

import React, { Component } from 'react'
import SubmitButton from "../common/SubmitButton";
import {_SESSION} from "../../actions/session";

class Dashboard extends Component {

  handleLogout = () => {
    sessionStorage.removeItem(_SESSION)
    this.props.history.push('/login')
  }

  render () {
    return (
      <div className='container'>
        <SubmitButton value='Logout' onSubmit={this.handleLogout} />
      </div>
    )
  }
}

export default Dashboard