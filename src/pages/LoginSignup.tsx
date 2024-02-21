import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginSignup = () => {
  const [loginPage, setLoginPage] = useState(true);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1E4D91]">
      {loginPage ? (
        <Login setLoginPage={setLoginPage}></Login>
      ) : (
        <Register setLoginPage={setLoginPage}></Register>
      )}
    </div>
  );
};

export default LoginSignup;
