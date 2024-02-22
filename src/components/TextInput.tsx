import { TextField } from "@mui/material";
import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: String;
};

const TextInput = (props: Props) => {
  const { label, type, required, onChange, value } = props;
  return (
    <div>
      <div className="text-sm font-semibold mb-2 ">{label}</div>
      <TextField
        size="small"
        fullWidth
        value={value}
        type={type}
        required={required}
        onChange={onChange}
      ></TextField>
    </div>
  );
};

export default TextInput;
