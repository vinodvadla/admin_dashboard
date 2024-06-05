import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRouter from './Components/Router/MainRouter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
)
