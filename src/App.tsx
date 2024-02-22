import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import LoginSignup from "./pages/LoginSignup";
import { useSelector } from "react-redux";
import { State } from "./types";
import FBIntergration from "./pages/FBIntergration";
import DashBoard from "./pages/DashBoard";

function App() {
  const login = useSelector((state: State) => state.loginState);
  const FBState = useSelector((state: State) => state.FBState);
  const [showDash, setShowDash] = useState(false);

  // }, []);
  return (
    <div>
      {!login ? (
        <LoginSignup></LoginSignup>
      ) : FBState && showDash ? (
        <DashBoard></DashBoard>
      ) : (
        <FBIntergration setShowDash={setShowDash}></FBIntergration>
      )}
    </div>
  );
}

export default App;
