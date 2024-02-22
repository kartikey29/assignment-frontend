import React, { ChangeEventHandler } from "react";
import { Button, ButtonProps } from "@mui/material";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: String;
};
const CusBtn = (props: Props) => {
  const { label, onClick, type } = props;

  return (
    <Button
      variant="contained"
      className="w-[100%] h-[45px] "
      sx={{ backgroundColor: "#1E4D91" }}
      onClick={onClick}
      type={type}
    >
      {label}
    </Button>
  );
};

export default CusBtn;
