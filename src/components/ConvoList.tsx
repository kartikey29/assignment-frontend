import React from "react";
import UserList from "./UserList";

const ConvoList = () => {
  return (
    <>
      <div className="p-4 text-xl border font-semibold">Conversations</div>
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
