import React, { FormEventHandler, useState } from "react";
import TextInput from "./TextInput";
import { Checkbox } from "@mui/material";
import CusBtn from "./CusBtn";
import axios from "axios";
import { useDispatch } from "react-redux";

type Props = {
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
};

const Register = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLoginPage } = props;

  const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const body = { name, password, email };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/createuser`,
        body
      );
      // setUserData(res.data);

      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch({ type: "LOGIN_SUCCESS" });
    } catch (e) {
      alert("email must be unique");
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  const dispatch = useDispatch();
  return (
    <div className="w-[90%] md:w-[420px] p-8 bg-white rounded-lg relative px-12">
      <h1 className="p-6 text-center font-semibold text-xl">Create Account</h1>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-4">
          <TextInput
            label="Name"
            type="text"
            value={name}
            required={true}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></TextInput>
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
          <CusBtn label={"Sign Up"} type="submit"></CusBtn>
        </div>
        <div className="text-sm text-center mt-6">
          Already have an account?{" "}
          <span
            className="text-[blue] cursor-pointer"
            onClick={() => {
              setLoginPage(true);
            }}
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
