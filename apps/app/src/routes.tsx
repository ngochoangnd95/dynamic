import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Root = React.lazy(() => import('./pages/root'))
const ErrorPage = React.lazy(() => import('./pages/error-page'))
const Overview = React.lazy(() => import('./pages/overview'))

function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/overview',
          element: <Overview />,
        },
      ],
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default Routes
