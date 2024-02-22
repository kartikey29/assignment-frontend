import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import LoginSignup from "./pages/LoginSignup";
import { useSelector } from "react-redux";
import { State } from "./types";
import FBIntergration from "./pages/FBIntergration";
import DashBoard from "./pages/DashBoard";
import AfterLogin from "./pages/AfterLogin";

function App() {
  const login = useSelector((state: State) => state.loginState);

  // }, []);
  return <div>{!login ? <LoginSignup></LoginSignup> : <AfterLogin />}</div>;
}

export default App;
