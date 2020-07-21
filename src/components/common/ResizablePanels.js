import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Dots from "./Icons/Dots";

class ResizablePanels extends Component {
  state = {
    isDragging: false,
    right: window.innerWidth/2,
    resizerPos: null,
  }

  componentDidMount () {
    ReactDOM.findDOMNode(this).addEventListener('mousemove', this.resizePanel)
    ReactDOM.findDOMNode(this).addEventListener('mouseup', this.stopResize)
    ReactDOM.findDOMNode(this).addEventListener('mouseleave', this.stopResize)
  }

  startResize = (event) => {
    this.setState({
      isDragging: true,
      resizerPos: event.clientX,
    })
  }

  stopResize = () => {
    if (this.state.isDragging) {
      this.setState({
        isDragging: false,
      })
    }
  }

  resizePanel = (event) => {
    if (this.state.isDragging) {
      console.log('clientX: ', event.clientX)
      console.log('resizerPos: ', this.state.resizerPos)
      const delta = event.clientX - this.state.resizerPos
      console.log('delta: ', delta)
      const borderLeft = window.innerWidth*0.2
      const borderRight = window.innerWidth*0.8
      const betweenBorders = event.clientX > borderLeft && event.clientX < borderRight
      const movingFromBorder = (event.clientX > borderLeft && delta < 0) || (event.clientX < borderRight && delta > 0)
      if(betweenBorders || movingFromBorder) {
        this.setState(({right, resizerPos}) => ({
          right: right - delta,
          resizerPos: resizerPos + delta
        }))
      }
    }
  }

  render() {
    const rest = this.props.children.slice(1)
    return (
      <div className="res_panel_container" onMouseUp={() => this.stopResize()}>
        <div className="res_panel" style={{width: `calc(100% - ${this.state.right}px`}}>
          {this.props.children[0]}
        </div>
        <div onMouseDown={(e) => this.startResize(e)}
             className="resizer" >
          <Dots/>
        </div>
        <div className="res_panel" style={{width: `${this.state.right}px`}}>
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}

export default ResizablePanels