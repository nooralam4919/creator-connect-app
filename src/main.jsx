import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import RoleSelect from "./pages/RoleSelect";
import GetstartPage from "./pages/GetstartPage";
import CreaterSection from "./pages/CreaterSection";
import CreateOwner from './pages/CreateOwner.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <RoleSelect />,
      },
      {
        path: "getstarted",
        element: <GetstartPage />,
      },
      {
         path:"owner",
         element: <CreateOwner/>,
      },
      {
         path: "creator",
        element: <CreaterSection/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);