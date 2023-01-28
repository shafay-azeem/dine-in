import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) {
      return navigate("/");
    }
  }, ["/"]);

  // console.log(auth.user, 'ssssss')
  // if (!auth.user) {
  //     console.log('hanjww')
  //     return navigate({
  //         pathname: "/",
  //     });
  // }
  return children;
};

export default RequireAuth;