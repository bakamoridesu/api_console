import React, { Component } from 'react'

class Graphic extends Component {
  render() {
    const {width="30", height="30", className} = this.props
    return (
      <svg width={width} height={height} className={className}>
        {this.props.children}
      </svg>
    )
  }
}

class Graphics extends Component {

  render () {
    return (
      <div className='graphics'>
        <Graphic>
          <circle cx="15" cy="15" r="15" fill="#C4C4C4"/>
        </Graphic>
        <Graphic width="15" height="30" className="graphics_rect">
          <rect width="15" height="30" fill="#C4C4C4" />
        </Graphic>
        <Graphic>
          <circle cx="15" cy="15" r="15" fill="#C4C4C4" />
        </Graphic>
        <Graphic>
          <polygon points="0,30 15,0 30,0 15,30" fill="#C4C4C4"/>
        </Graphic>
      </div>
    )
  }
}

export default Graphics