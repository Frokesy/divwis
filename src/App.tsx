import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Shops from "./pages/shops";
import { AnimatePresence } from "framer-motion";
import Account from "./pages/account";
import Contact from "./pages/contact";
import Success from "./pages/res/success";
import Cancel from "./pages/res/cancel";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/shops/:category_id", element: <Shops /> },
    { path: "/account", element: <Account /> },
    { path: "/contact", element: <Contact /> },
    { path: "/success", element: <Success /> },
    { path: "/cancel", element: <Cancel /> }
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
