import React, {Component} from 'react'
import Graphics from "../common/Graphics";
import * as str from "../../utils/strings"
import LogoutIcon from "../common/Icons/LogoutIcon";
import FullScreenIcon from "../common/Icons/FullScreenIcon";
import ExitFullScreenIcon from "../common/Icons/ExitFullScreenIcon";
import {useFullScreen} from 'react-browser-hooks'
import {useHistory} from "react-router-dom";
import {_SESSION, handlePong} from "../../utils/api";

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

  class AccountInfo extends Component {
    state = {
      account: '',
      sublogin: '',
    }
    componentDidMount() {
      handlePong()
        .then((res) => {
          console.log('pong res: ', res)
          const { account, sublogin } = res
          this.setState({
            account,
            sublogin,
          })
        })
    }

    render() {
      const { account, sublogin } = this.state
      console.log(sublogin)
      return (
        <div className="login_info">
          {account}
          {sublogin!=='' && sublogin !== account && ` : ${sublogin}`}
        </div>
      )
    }
  }

  return (
    <div className='dashboard_header'>
      <div>
        <Graphics/>
        <span>{str.legend}</span>
      </div>
      <div>
        <AccountInfo/>
        <button
          className="button_action button_action_text button_exit"
          onClick={handleLogout}>
          {str.exit}
          <LogoutIcon/>
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