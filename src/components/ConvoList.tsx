import React from "react";
import UserList from "./UserList";
import RefreshIcon from "@mui/icons-material/Refresh";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
const ConvoList = () => {
  return (
    <>
      <div className="border p-4 flex justify-between items-center">
        <div className="text-xl font-semibold flex items-center gap-2">
          <AlignHorizontalLeftIcon sx={{ color: "#818181" }} /> Conversations{" "}
        </div>
        <RefreshIcon sx={{ color: "#818181" }} />
      </div>
      <div>
        <div className="bg-[#EDEEF0]">
          <UserList />
        </div>
        <UserList />
        <UserList />
        <UserList />
      </div>
    </>
  );
};

export default ConvoList;
