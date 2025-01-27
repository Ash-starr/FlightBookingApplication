import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/HomePage.jsx";
import Authentication, {
  action as authAction,
} from "./pages/Authentication.jsx";
import FlightLayout from "./pages/FlightsLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "auth",
        element: <Authentication />,
        action: authAction,
      },
      {
        path: "flights",
        element: <FlightLayout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
