import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { initThinBackend } from 'thin-backend'
import { ThinBackend } from 'thin-backend-react'

import App from './App'
import Eval from './pages/Eval'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/eval',
    element: <Eval />
  }
])

initThinBackend({ host: import.meta.env.VITE_BACKEND_URL });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThinBackend>
      <RouterProvider router={router} />
    </ThinBackend>
  </React.StrictMode>,
)
