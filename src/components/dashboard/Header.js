import React from 'react'
import Graphics from "../common/Graphics";
import * as str from "../../utils/strings"
import Logout from "../common/Icons/Logout";
import FullScreenIcon from "../common/Icons/FullScreenIcon";
import ExitFullScreenIcon from "../common/Icons/ExitFullScreenIcon";
import {useFullScreen} from 'react-browser-hooks'
import {useHistory} from "react-router-dom";
import {_ACCOUNT, _SESSION, _SUBLOGIN} from "../../actions/session";

function Header() {
  const fs = useFullScreen()
  let history = useHistory()

  const toggleFullscreen = (e) => {
    e.currentTarget.blur()
    fs.toggle();
  }

  const handleLogout = () => {
    sessionStorage.removeItem(_SESSION)
    history.push('/login')
  }

  const account = sessionStorage.getItem(_ACCOUNT)
  const sublogin = sessionStorage.getItem(_SUBLOGIN)
  return (
    <div className='dashboard_header'>
      <div>
        <Graphics/>
        <span>{str.legend}</span>
      </div>
      <div>
        <div className="login_info">
          {account}
          {sublogin && ` : ${sublogin}`}
        </div>
        <button
          className="button_action button_action_text button_exit"
          onClick={handleLogout}>
          {str.exit}
          <Logout/>
        </button>
        <button className="button_action button_icon" onClick={toggleFullscreen}>
          {fs.fullScreen
            ? ExitFullScreenIcon()
            : FullScreenIcon()}
        </button>
      </div>
    </div>
  )
}

export default Header