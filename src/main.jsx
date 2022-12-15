import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppReducer } from './AppReducer'
import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppReducer />
  </React.StrictMode>,
)
