import React, { useState } from "react";
import UserList from "./UserList";
import RefreshIcon from "@mui/icons-material/Refresh";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
const ConvoList = () => {
  const [selected, setSelected] = useState(1);

  let m = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="border p-4 flex justify-between items-center">
        <div className="text-xl font-semibold flex items-center gap-2">
          <AlignHorizontalLeftIcon sx={{ color: "#818181" }} /> Conversations{" "}
        </div>
        <RefreshIcon sx={{ color: "#818181" }} />
      </div>
      <div>
        {m.map((i) => {
          return (
            <div
              key={i}
              id={i.toString()}
              onClick={(e) => {
                setSelected(Number(e.currentTarget.id));
              }}
              className={
                i === selected
                  ? "bg-[#EDEEF0] cursor-pointer"
                  : "cursor-pointer"
              }
            >
              <UserList />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ConvoList;
