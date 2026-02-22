import { Navigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  return user ? children : <Navigate to="/" />;
}