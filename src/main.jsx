import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
// import "./App.css";
// import "./index.css"

import CounterApp from "./CounterApp.jsx";
import The404Page from "./The404Page.jsx";
import AppErrorBoundary from "./Components/ErrorBoundary.jsx";

const routes = [
  { path: "/", element: <CounterApp /> },
  { path: "/Error", element: <Error /> },
  { path: "/*", element: <The404Page /> },
  { path: "Boundary", element: <AppErrorBoundary /> },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
