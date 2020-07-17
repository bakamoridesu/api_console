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
import Header from "./Header";

class Dashboard extends Component {

  handleLogout = () => {
    sessionStorage.removeItem(_SESSION)
    this.props.history.push('/login')
  }

  render () {
    return (
      <div className='dashboard'>
        <Header/>
        <div className='hr'/>
        <div className='dashboard_header'>

        </div>
        <div className='hr'/>
        <div className='dashboard_content'>

        </div>
        <div className='hr'/>
        <div className='dashboard_footer'>
          <SubmitButton value='Отправить' onSubmit={this.handleLogout}/>
        </div>
      </div>
    )
  }
}

export default Dashboard