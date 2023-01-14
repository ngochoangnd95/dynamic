import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/root'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
