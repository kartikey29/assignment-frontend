import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { Box, CssBaseline } from "@mui/material";
import ConvoComponent from "../components/conversation/ConvoComponent";

const DashBoard = () => {
  const [selected, setSelected] = useState("conv");

  const renderSelected = () => {
    switch (selected) {
      case "conv":
        return <ConvoComponent />;
      default:
        return (
          <div className="min-h-screen flex justify-center items-center text-center relative">
            <img
              src={require("../assets/logo.png")}
              alt="logo"
              className=""
            ></img>
          </div>
        );
    }
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar setSelected={setSelected} selected={selected}></SideBar>
        <Box component="main" sx={{ flexGrow: 1 }}>
          {renderSelected()}
        </Box>
      </Box>
    </div>
  );
};

export default DashBoard;
