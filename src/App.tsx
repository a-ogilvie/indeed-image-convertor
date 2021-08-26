// import React from 'react'
import './App.css'
import { AppProvider } from 'context'
import InputArea from './InputArea'
import OutputArea from './OutputArea'
import { FileUploader } from 'components/FileUploader'

function App() {
  return (
    <div className="App">
      <AppProvider>
        <FileUploader />
        <div className="pictureBox">
          <InputArea />
          <OutputArea />
        </div>
      </AppProvider>
    </div>
  )
}

export default App
