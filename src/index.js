import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Inicio } from "./Inicio";
import { VideoPlay } from "./VideoPlay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  // other pages....
  {
    path: "/video-play/:video",
    element: <VideoPlay />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);