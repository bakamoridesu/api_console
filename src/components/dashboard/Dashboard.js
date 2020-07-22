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
import Header from "./Header";
import * as str from "../../utils/strings"
import Footer from "./Footer";
import Content from "./Content";
import {_SESSION} from "../../utils/api";

function Dashboard() {
  const handleFormat = (e) => {
    e.currentTarget.blur()
    console.log('format!')
  }
  return (
    <div>
        <div className='dashboard'>
          <Header/>
          <div className='hr'/>
          <div className='dashboard_header'>

          </div>
          <div className='hr'/>
          <Content />
          <div className='hr'/>
          <Footer handleFormat={handleFormat}/>
        </div>
    </div>
  )
}

export default Dashboard