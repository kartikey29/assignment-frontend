import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

type Props = {
  loading: boolean;
};

const Loader = (props: Props) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
      }}
      open={props.loading}
    >
      <CircularProgress />
    </Backdrop>
  );
};

export default Loader;
