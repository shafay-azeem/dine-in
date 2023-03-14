import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  let token = localStorage.getItem("token");
  let user_id = localStorage.getItem("user_id");
  let resUserName = localStorage.getItem("resUserName");

  useEffect(() => {
    // if (!auth.user) {
    //   return navigate("/");
    // }
    if (!token && !user_id && !resUserName) {
      return navigate("/");
    }
  }, ["/"]);

  return children;
};

export default RequireAuth;
