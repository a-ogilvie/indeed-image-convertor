import React, { createContext, Dispatch } from 'react'
import { imageReducer, ImageActions } from './reducers'

type InitialStateType = {
  file: Blob | null
  before: string
  after: string
  converting: boolean
}

const initialState = {
  file: null,
  before: '',
  after: '',
  converting: false,
}

const AppContext = createContext<{
  state: InitialStateType
  dispatch: Dispatch<ImageActions>
}>({
  state: initialState,
  dispatch: () => null,
})

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(imageReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
