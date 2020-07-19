/*
// prettier json
let text = this.state.text
text = JSON.parse(text)
let pretty = JSON.stringify(text, undefined, 4)
this.setState({
  text: pretty,
})*/

import React from 'react'
import SubmitButton from "../common/SubmitButton";
import {_SESSION} from "../../actions/session";
import Header from "./Header";
import * as str from "../../utils/strings"

function Dashboard() {

  const handleSend = () => {
    console.log('Sent!')
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
            <SubmitButton value={str.send} onSubmit={handleSend}/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard