import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error-page'
import Root from './pages/root'

const Home = React.lazy(() => import('./pages/home'))
const Philosophy = React.lazy(() => import('./pages/philosophy'))

const App = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'philosophy',
          element: <Philosophy />
        },
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
