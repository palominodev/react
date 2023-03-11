import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TodoProvider } from './08-useReducer/context/TodoProvider'
import { MainApp } from './09-useContext/MainApp'
import { HookApp } from './HookApp'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <HookApp />
  <BrowserRouter>
      <TodoProvider>
        <HookApp />
      </TodoProvider>
  </BrowserRouter>
    
  // </React.StrictMode>,
)
