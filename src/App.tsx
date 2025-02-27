import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Shops from "./pages/shops";
import { AnimatePresence } from "framer-motion";
import Account from "./pages/account";
import Contact from "./pages/contact";
import Success from "./pages/res/success";
import Cancel from "./pages/res/cancel";
import MobileCart from "./pages/cart";
import Favorites from "./pages/favorites";
import Checkout from "./pages/checkout";
import Search from "./pages/search";
import PrivateRoute from "./components/defaults/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/shops/:category_tag", element: <Shops /> },
    {
      path: "/account",
      element: (
        <PrivateRoute>
          <Account />
        </PrivateRoute>
      ),
    },
    { path: "/contact", element: <Contact /> },
    { path: "/success", element: <Success /> },
    { path: "/cancel", element: <Cancel /> },
    { path: "/cart", element: <MobileCart /> },
    { path: "/favorites", element: <Favorites /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/search", element: <Search /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
