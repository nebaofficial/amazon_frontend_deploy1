import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = ({ children, msg, redirectTo }) => {
  const [{ user }] = useContext(DataContext);

  if (!user) {
    return (
      <Navigate
        to="/Auths"
        replace
        state={{
          msg,
          redirectTo: redirectTo, // e.g: "/payment"
        }}
      />
    );
  }

  return children;
};

export default ProtectedRoute;
