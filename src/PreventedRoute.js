import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function PreventedRoute({ children }) {
  const { authToken } = useAuth();
  console.log(authToken);
  return ! authToken? children : <Navigate to={"/Dashboard"} />;
}

