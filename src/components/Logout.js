import React, { useEffect } from "react";
import { Redirect } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {
  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((res) => {
        console.log(res);
        localStorage.removeItem("token");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Redirect to="/login" />
    </div>
  );
};

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.
