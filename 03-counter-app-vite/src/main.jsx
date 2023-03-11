import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
import FirstApp from './FirtsApp'
import { HelloWordApp } from './HelloWordApp'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp /> */}
        {/* <HelloWordApp /> */}
        <CounterApp value={1} />
        
    </React.StrictMode>
)