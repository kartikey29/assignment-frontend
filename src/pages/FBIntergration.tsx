import React, { useEffect, useState } from "react";
import CusBtn from "../components/CusBtn";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../types";
import { LoginSocialFacebook } from "reactjs-social-login";
import { getFacebookLoginStatus, fbLogin, logout } from "../util/FacebookSDK";

type Props = {
  setShowDash: React.Dispatch<React.SetStateAction<boolean>>;
};

const FBIntergration = (props: Props) => {
  const FBloggedIn = useSelector((state: State) => state.FBState);
  const dispatch = useDispatch();

  const handleLogin = () => {
    fbLogin().then((res) => {
      if (res.status === "connected") {
        console.log("Person is connected");
        dispatch({ type: "FB_INTEGRATED" });
        console.log(res);
      } else {
        // something
      }
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1E4D91]">
      <div className=" md:w-[450px] rounded-2xl bg-white  flex justify-evenly items-center p-10 ">
        {!FBloggedIn ? (
          <>
            <div className="flex flex-col gap-10 w-[90%] text-center">
              <h1 className="text-lg font-medium">
                Facebook Page Integration{" "}
              </h1>

              <CusBtn label={"Connect Page"} onClick={handleLogin}></CusBtn>
            </div>
          </>
        ) : (
          <>
            <div className=" w-[90%] text-center flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-medium">
                  Facebook Page Integration
                </h1>
                <h1 className="text-lg font-medium">
                  Integrated Page: <b>Amazon Business</b>
                </h1>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  variant="contained"
                  className="w-[100%] h-[45px] "
                  color="error"
                  onClick={() => {
                    logout().then(() => {
                      dispatch({ type: "REMOVE_INTEGRATION" });
                    });
                  }}
                >
                  Delete integration
                </Button>
                <CusBtn
                  label={"Reply to messages"}
                  onClick={() => {
                    props.setShowDash(true);
                  }}
                ></CusBtn>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FBIntergration;
