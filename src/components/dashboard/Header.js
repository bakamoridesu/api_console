import React from 'react'
import Graphics from "../common/Graphics";
import * as str from "../../utils/strings"
import Logout from "../common/Icons/Logout";
import FullScreenIcon from "../common/Icons/FullScreenIcon";
import ExitFullScreenIcon from "../common/Icons/ExitFullScreenIcon";
import { useFullScreen } from 'react-browser-hooks'

function Header () {
  const fs = useFullScreen()

  const handleClick = (e) => {
    e.currentTarget.blur()
    fs.toggle();
  }
  return (
    <div className='dashboard_header'>
      <Graphics />
      <span>{str.legend}</span>
      <div className="auth_info">
        <div className="login_info">
          `some@email.com : sublogin`
        </div>
      </div>
      <button className="button_action">
        <span>Выйти</span>
        <Logout />
      </button>
      <button className="button_action" onClick={handleClick}>
        {fs.fullScreen
        ? ExitFullScreenIcon()
        : FullScreenIcon()}
      </button>
    </div>
  )
}

export default Header