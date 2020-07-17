import React from 'react'
import Graphics from "../common/Graphics";
import * as str from "../../utils/strings"
import Logout from "../common/Icons/Logout";
import Fullscreen from "../common/Icons/Fullscreen";

function Header () {
  return (
    <div className='dashboard_header'>
      <Graphics />
      <span>{str.legend}</span>
      <div className="auth_info">
        <div className="login_info">
          `some@email.com : sublogin`
        </div>
        `Выйти`
      </div>
      <Logout />
      <Fullscreen />
    </div>
  )
}

export default Header