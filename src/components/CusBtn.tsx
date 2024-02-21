import React from "react";
import { Button } from "@mui/material";

type Props = {
  label: String;
  onClick?: (arg0: any) => void;
};
const CusBtn = (props: Props) => {
  const { label, onClick } = props;

  return (
    <Button
      variant="contained"
      className="w-[100%] h-[45px] "
      sx={{ backgroundColor: "#1E4D91" }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CusBtn;
