import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import reduxStore from "./store/reduxStore.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayingVideoContainer from "./components/PlayingVideoContainer.jsx";
import VideoContainer from "./components/VideoContainer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "/playing",
        element: <PlayingVideoContainer />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={reduxStore}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>,
);
