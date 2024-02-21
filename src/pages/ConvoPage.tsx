import React from "react";
import Chat from "../components/Chat";
import UserInfo from "../components/UserInfo";
import ConvoList from "../components/ConvoList";

const ConvoPage = () => {
  return (
    <div className="flex">
      <div className="min-h-screen md:w-[200px] lg:w-[275px] xl:w-[350px] border ">
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

export default ConvoPage;
