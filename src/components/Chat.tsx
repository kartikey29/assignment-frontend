import { TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { ChatData } from "../chatData";

const Chat = () => {
  const [messages, setMessages] = useState(ChatData);
  const [newMessage, setNewMessage] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages.length]);

  const submitHandler: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (newMessage !== "") {
      const mess = {
        text: newMessage,
        type: "sent",
        date: new Date().toISOString(),
      };

      setMessages([...messages, mess]);
    }
    setNewMessage("");
  };

  return (
    <div className="h-screen border flex flex-col">
      <div className="p-4 text-xl border font-semibold">Amit RG</div>
      <div className="flex-1 bg-[#F6F6F6] p-4 pt-6 overflow-scroll flex flex-col gap-3 overflow-x-hidden">
        {messages.map((dat, i) => {
          return (
            <Message
              key={i}
              type={dat.type}
              data={{ text: dat.text, time: new Date(dat.date) }}
            ></Message>
          );
        })}
        <div ref={ref} />
      </div>
      <div className=" py-3 pb-10 bg-[#F6F6F6]  text-center">
        <form onSubmit={submitHandler}>
          <TextField
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            size="small"
            placeholder="Message Amit"
            sx={{ width: "90%" }}
          ></TextField>
        </form>
      </div>
    </div>
  );
};

export default Chat;
