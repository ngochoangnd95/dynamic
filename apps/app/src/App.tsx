import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error-page'
import Root from './pages/root'

const Home = React.lazy(() => import('./pages/home'))
const Philosophy = React.lazy(() => import('./pages/philosophy'))
const DynamicField = React.lazy(() => import('./pages/dynamic-field'))
const Select = React.lazy(() => import('./pages/custom/select'))

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
        {
          path: 'dynamic-field',
          element: <DynamicField />
        },
        {
          path: 'custom',
          children: [
            {
              path: 'select',
              element: <Select />
            }
          ]
        },
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
