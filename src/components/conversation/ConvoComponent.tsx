import React from "react";
import Chat from "./Chat";
import UserInfo from "./UserInfo";
import ConvoList from "./ConvoList";

const ConvoComponent = () => {
  return (
    <div className="flex">
      <div className="min-h-screen lg:w-[275px] xl:w-[350px] border ">
        <ConvoList />
      </div>
      <div className="w-[55%]">
        <Chat />
      </div>
      <div className="flex-1">
        <UserInfo></UserInfo>
      </div>
    </div>
  );
};

export default ConvoComponent;
