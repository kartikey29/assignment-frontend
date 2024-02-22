import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashBoard from "./DashBoard";
import FBIntergration from "./FBIntergration";
import { State } from "../types";

const AfterLogin = () => {
  const FBState = useSelector((state: State) => state.FBState);
  const [showDash, setShowDash] = useState(false);

  return (
    <div>
      {FBState && showDash ? (
        <DashBoard></DashBoard>
      ) : (
        <FBIntergration setShowDash={setShowDash}></FBIntergration>
      )}
    </div>
  );
};

export default AfterLogin;

// FBState && showDash ? (
//     <DashBoard></DashBoard>
//   ) : (
//     <FBIntergration setShowDash={setShowDash}></FBIntergration>
//   )}
