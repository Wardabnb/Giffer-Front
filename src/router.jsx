import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import LogIn from "./pages/login";
import ProtectedRoute from "./utils/ProtectedRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile/:username",
    element: (
      <ProtectedRoute>
        <Profile />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);
