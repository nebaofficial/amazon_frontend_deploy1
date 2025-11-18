import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { DataProvider } from './Components/DataProvider/DataProvider.jsx'
import { reducer as userReducer, initialState } from './Utility/reducer.js' 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider reducer={userReducer} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>,
)
