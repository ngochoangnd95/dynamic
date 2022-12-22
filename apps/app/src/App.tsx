import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Overview from "./pages/overview"

const Root = React.lazy(() => import('./pages/root'))
const ErrorPage = React.lazy(() => import('./pages/error-page'))

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/overview',
          element: <Overview />,
        }
      ],
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
