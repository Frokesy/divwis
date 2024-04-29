import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Shops from "./pages/shops";
import { AnimatePresence } from "framer-motion";
import Account from "./pages/account";
import Contact from "./pages/contact";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("");

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/shops/:category_id", element: <Shops /> },
    { path: "/account", element: <Account /> },
    { path: "/contact", element: <Contact /> },
  ]);

  const options = {
    clientSecret: "{{CLIENT_SECRET}}",
  };

  return (
    <AnimatePresence mode="wait">
      <Elements stripe={stripePromise} options={options}>
        <RouterProvider router={router} />
      </Elements>
    </AnimatePresence>
  );
}

export default App;
