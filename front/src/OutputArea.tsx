import React from 'react'
import { AppContext } from './context'
// import Canvas from './components/Canvas'

const OutputArea = () => {
  const { state } = React.useContext(AppContext)
  const { after, converting } = state
  return (
    <div className="outputBox">
      {converting ? (
        <div className="loader"></div>
      ) : after ? (
        <img alt="output" src={after} />
      ) : (
        <div>Converted picture will be shown here.</div>
      )}
    </div>
  )
}

export default OutputArea
