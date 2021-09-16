import React, { createContext, Dispatch } from 'react';
import { imageReducer, ImageActions } from './reducers';

type InitialStateType = {
  file: Blob | null;
  before: string;
  after: string;
  converting: boolean;
};

const initialState = { after: '', before: '', converting: false, file: null };

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ImageActions>;
}>({ dispatch: () => null, state: initialState });

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(imageReducer, initialState);

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
