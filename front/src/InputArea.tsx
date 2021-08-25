import React from 'react'
import { AppContext } from './context'
// import Canvas from './components/Canvas'

const InputArea = () => {
  const { state } = React.useContext(AppContext)
  const { before } = state
  return (
    <div className="inputBox">
      {before ? (
        <img alt="input" src={before} />
      ) : (
        <div>Your picture will be shown here.</div>
      )}
    </div>
  )
}

export default InputArea
