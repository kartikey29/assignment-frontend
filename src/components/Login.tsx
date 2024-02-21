import React from "react";
import TextInput from "./TextInput";
import { Button, Checkbox } from "@mui/material";
import CusBtn from "./CusBtn";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../types";

type Props = {
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = (props: Props) => {
  const dispatch = useDispatch();

  const { setLoginPage } = props;
  return (
    <div className="w-[90%] md:w-[420px] p-8 bg-white rounded-lg relative px-12">
      <h1 className="p-6 text-center font-semibold text-xl">
        Login to your account
      </h1>
      <div className="flex flex-col gap-4">
        <TextInput label="Email" type="email"></TextInput>
        <TextInput label="Password" type="password"></TextInput>
      </div>
      <div className="flex items-center relative right-2 mt-1">
        <Checkbox size="small"></Checkbox>
        <span className="text-sm font-medium">Remember Me</span>
      </div>
      <div className="text-center mt-6">
        <CusBtn
          label={"Login"}
          onClick={() => {
            dispatch({ type: "LOGIN_SUCCESS" });
          }}
        ></CusBtn>
      </div>
      <div className="text-sm text-center mt-6">
        New to MyApp?{" "}
        <span
          className="text-[blue] cursor-pointer"
          onClick={() => {
            setLoginPage(false);
          }}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Login;
