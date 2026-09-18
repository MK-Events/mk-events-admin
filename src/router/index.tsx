import { createBrowserRouter } from "react-router-dom";

import {
  Dashboard,
  Events,
  Gallery,
  Login,
  NotFound,
  Registrations,
  Settings,
  Team,
  Urls,
} from "@mk/pages";
import { MainLayout } from "./MainLayout";
import { ProtectedLayout } from "./ProtectedLayout";

export const router = createBrowserRouter([
  { path: "/login", element: <Login />, errorElement: <NotFound /> },
  {
    element: <ProtectedLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/", element: <Dashboard /> },
          { path: "/events", element: <Events /> },
          { path: "/gallery", element: <Gallery /> },
          { path: "/registrations", element: <Registrations /> },
          { path: "/urls", element: <Urls /> },
          { path: "/team", element: <Team /> },
          { path: "/settings", element: <Settings /> },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);
