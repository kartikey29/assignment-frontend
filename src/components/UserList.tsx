import { Checkbox } from "@mui/material";
import React from "react";

const UserList = () => {
  return (
    <div className="p-3 border px-2 relative">
      <div className="absolute right-4 top-2 text-sm text-gray-500">10m</div>
      <div className="flex items-center ">
        <Checkbox size="small"></Checkbox>
        <div>
          <div className="text-md font-bold">Amit RG</div>
          <div className="text-sm font-semibold">Facebook DM </div>
        </div>
      </div>
      <div className="ml-3 mt-2">
        <div className="text-sm font-semibold">Awesome product</div>
        <div className="text-sm text-gray-500">Hey there! I probably did..</div>
      </div>
    </div>
  );
};

export default UserList;
