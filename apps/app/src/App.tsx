import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error-page'
import Root from './pages/root'

const Introduction = React.lazy(() => import('./pages/introduction'))

const App = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'introduction',
          element: <Introduction />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
