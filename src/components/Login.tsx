import React, { useState, FormEventHandler } from "react";
import TextInput from "./TextInput";
import { Button, Checkbox } from "@mui/material";
import CusBtn from "./CusBtn";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../types";
import axios from "axios";

type Props = {
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = (props: Props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const body = { email, password };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/login`,
        body
      );

      localStorage.setItem("token", JSON.stringify(res.data.token));

      dispatch({ type: "LOGIN_SUCCESS" });
    } catch (e) {
      alert("email not found or password is wrong");
      console.log(e);
    }
    console.log(body);
  };

  const { setLoginPage } = props;
  return (
    <div className="w-[90%] md:w-[420px] p-8 bg-white rounded-lg relative px-12">
      <h1 className="p-6 text-center font-semibold text-xl">
        Login to your account
      </h1>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-4">
          <TextInput
            label="Email"
            type="email"
            value={email}
            required={true}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></TextInput>
          <TextInput
            label="Password"
            type="password"
            value={password}
            required={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></TextInput>
        </div>
        <div className="flex items-center relative right-2 mt-1">
          <Checkbox size="small"></Checkbox>
          <span className="text-sm font-medium">Remember Me</span>
        </div>
        <div className="text-center mt-6">
          <CusBtn label={"Login"} type="submit"></CusBtn>
        </div>
      </form>
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
