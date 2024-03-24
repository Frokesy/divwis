import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SmoothScrollWraper from "./components/wrappers/SmoothScrollWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SmoothScrollWraper>
      <App />
    </SmoothScrollWraper>
  </React.StrictMode>
);
