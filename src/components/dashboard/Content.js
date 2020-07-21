import React from 'react'
import ResizablePanels from "../common/ResizablePanels";
import * as str from '../../utils/strings'

const Content = () => {
  return (
    <div className='dashboard_content'>
      <ResizablePanels>
        <div className='content_panel'>
          <span>{str.request}</span>
          <textarea />
        </div>
        <div className='content_panel'>
          <span>{str.response}</span>
          <textarea/>
        </div>
      </ResizablePanels>
    </div>
  )
}

export default Content