import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Dots from "./Icons/Dots";

class ResizablePanels extends Component {
  state = {
    isDragging: false,
    right: 50,
    resizerPos: null,
  }

  componentDidMount () {
    ReactDOM.findDOMNode(this).addEventListener('mousemove', this.resizePanel)
    ReactDOM.findDOMNode(this).addEventListener('mouseup', this.stopResize)
    ReactDOM.findDOMNode(this).addEventListener('mouseleave', this.stopResize)
  }

  percent () {
    return window.innerWidth/100
  }

  startResize = (event) => {

    this.setState({
      isDragging: true,
      resizerPos: event.clientX / this.percent(),
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
      // counting in percents for better resizing experience
      const percent = this.percent()
      const delta = event.clientX/percent - this.state.resizerPos

      // make borders for resizing (20% from left and right)
      const borderLeft = window.innerWidth*0.2
      const borderRight = window.innerWidth*0.8
      const betweenBorders = event.clientX > borderLeft && event.clientX < borderRight
      const movingFromBorder = (event.clientX > borderLeft && delta < 0) || (event.clientX < borderRight && delta > 0)
      if(betweenBorders || movingFromBorder) {
        this.setState(({right, resizerPos}) => ({
          right: right - delta ,
          resizerPos: resizerPos + delta
        }))
      }
    }
  }

  render() {
    return (
      <div className="res_panel_container" onMouseUp={() => this.stopResize()}>
        <div className="res_panel" style={{width: `calc(100% - ${this.state.right}%`}}>
          {this.props.children[0]}
        </div>
        <div onMouseDown={(e) => this.startResize(e)}
             className="resizer" >
          <Dots/>
        </div>
        <div className="res_panel" style={{width: `${this.state.right}%`}}>
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}

export default ResizablePanels