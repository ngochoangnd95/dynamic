import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes'
import './styles/index.css'
import './styles/tailwind-overrided.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
