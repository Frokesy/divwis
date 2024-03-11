import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Shops from "./pages/shops"

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/shops", element: <Shops /> },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
