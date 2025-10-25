import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./Routs/Rout.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import { StrictMode } from "react";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>

);
