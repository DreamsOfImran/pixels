import React, { useState } from 'react'
import { CirclePicker } from 'react-color'
import DrawingPanel from './DrawingPanel'

import '../styles/editor.scss'

const COLOR_INPUTS = [
  "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3",
  "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39",
  "#ffeb3b", "#ffc107", "#ff9800", "#795548", "#607d8b", "#ffffff"
]

const Editor = () => {
  const [panelWidth, setPanelWidth] = useState(16)
  const [panelHeight, setPanelHeight] = useState(16)
  const [hideOptions, setHideOptions] = useState(false)
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
  const [buttonText, setButtonText] = useState("start drawing")
  const [selectedColor, setColor] = useState("#f44336")

  const initializeDrawingPanel = () => {
    setHideOptions(!hideOptions)
    setHideDrawingPanel(!hideDrawingPanel)

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing")
    
  }

  const changeColor = (color) => {
    setColor(color.hex)
  }

  return (
    <div id="editor">
      <h1>Pixel Editor</h1>
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}

      {hideDrawingPanel && (<div id="options">
        <div className="option">
          <input
            type="number"
            className="panelInput"
            value={panelWidth}
            onChange={(e) => {
              setPanelWidth(e.target.value)
            }}
          />
          <span>Width</span>
        </div>
        <div className="option">
          <input
            type="number"
            className="panelInput"
            value={panelHeight}
            onChange={(e) => {
              setPanelHeight(e.target.value)
            }}
          />
          <span>Height</span>
        </div>
      </div>)}

      <button className="button" onClick={initializeDrawingPanel}>{buttonText}</button>

      {hideOptions && (
        <CirclePicker
          color={selectedColor}
          onChangeComplete={changeColor}
          colors={COLOR_INPUTS}
        />
      )}
      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  )
}

export default Editor
