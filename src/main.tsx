import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { EditContextProdiver } from './context/EditContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EditContextProdiver>
      <App />
    </EditContextProdiver>
  </React.StrictMode>
)
