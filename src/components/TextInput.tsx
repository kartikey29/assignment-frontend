import { TextField } from "@mui/material";
import React from "react";

type Props = {
  label: string;
  type: string;
};

const TextInput = (props: Props) => {
  const { label, type } = props;
  return (
    <div>
      <div className="text-sm font-semibold mb-2 ">{label}</div>
      <TextField size="small" fullWidth type={type}></TextField>
    </div>
  );
};

export default TextInput;
