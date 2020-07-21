import React from 'react'
import SubmitButton from "../common/SubmitButton";
import * as str from "../../utils/strings";
import LogoutIcon from "../common/Icons/LogoutIcon";
import FormatIcon from "../common/Icons/FormatIcon";

export default function Footer ({handleFormat}) {

  const handleSend = () => {
    console.log('Sent!')
  }

  return (
    <div className='dashboard_footer'>
      <SubmitButton value={str.send} onSubmit={handleSend}/>
      <button
        className="button_action button_action_text"
        onClick={(event) => handleFormat(event)}>
        <FormatIcon/>
        <span>
          {str.format}</span>
      </button>
    </div>
  )
}