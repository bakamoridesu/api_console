/*
// prettier json
let text = this.state.text
text = JSON.parse(text)
let pretty = JSON.stringify(text, undefined, 4)
this.setState({
  text: pretty,
})*/

import React from 'react'
import {useHistory} from "react-router-dom";
import SubmitButton from "../common/SubmitButton";
import {_SESSION} from "../../actions/session";
import Header from "./Header";

function Dashboard() {
  let history = useHistory()

  const handleLogout = () => {
    sessionStorage.removeItem(_SESSION)
    history.push('/login')
  }
  return (
    <div>
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
            <SubmitButton value='Отправить' onSubmit={handleLogout}/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard