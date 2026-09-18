import { useAppSelector } from "@mk/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function ProtectedLayout() {
  const location = useLocation();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
