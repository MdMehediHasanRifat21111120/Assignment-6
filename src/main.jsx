import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import {MyRouter} from './routers/Router.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={MyRouter}/>
    </AuthContextProvider>
    
  </StrictMode>,
)
