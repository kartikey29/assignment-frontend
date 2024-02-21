import { Avatar } from "@mui/material";
import React, { useRef } from "react";
import ProfilePic from "../assets/profilePic.jpg";
import AgentPic from "../assets/AgentPic.jpg";

type Props = {
  type: string;
  data: { text: string; time: Date };
};

const Message = (props: Props) => {
  let time = props.data.time.toLocaleString("en-US", {
    month: "short", // Short month name (e.g., Mar)
    day: "2-digit", // Two-digit day of the month (e.g., 05)
    hour: "numeric", // Numeric hour (e.g., 2)
    minute: "numeric", // Numeric minute (e.g., 22)
    hour12: true, // Use 12-hour clock (true for AM/PM)
  });

  return (
    <div
      className="flex items-end gap-2"
      style={{
        justifyContent: props.type === "received" ? "start" : "end",
      }}
    >
      <Avatar
        src={props.type === "received" ? ProfilePic : AgentPic}
        sx={{ mb: 3.5 }}
        className={props.type === "received" ? "order-0" : "order-1"}
      ></Avatar>
      <span className=" max-w-[42%] flex flex-col gap-1">
        <span className="bg-white p-4 rounded-lg flex items-center gap-3 relative">
          <span className="text-md self-center">{props.data.text}</span>
        </span>
        <span
          className="text-xs px-4"
          style={{ textAlign: props.type === "received" ? "left" : "right" }}
        >
          {props.type === "received" ? (
            <>Amit RG {time}</>
          ) : (
            <>Richard Panel {time}</>
          )}
        </span>
      </span>
    </div>
  );
};

export default Message;
