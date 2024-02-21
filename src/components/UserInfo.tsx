import { Avatar } from "@mui/material";
import ProfilePic from "../assets/profilePic.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const UserInfo = () => {
  return (
    <div className="flex flex-col  items-center min-h-screen border ">
      <div className="flex flex-col items-center gap-4 w-[100%] pt-10 pb-10 border">
        <Avatar
          src={ProfilePic}
          sx={{ width: "80px", height: "80px" }}
        ></Avatar>
        <div>
          <div className="text-lg font-semibold">Amit RG</div>
          <div className="flex justify-center items-center gap-1">
            <FiberManualRecordIcon
              sx={{ color: "gray", fontSize: "20px" }}
            ></FiberManualRecordIcon>
            <span className="text-gray-400">offline</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="min-w-[80px] flex justify-center items-center text-[#545454] p-2 border gap-1 text-sm">
            <PhoneIcon sx={{ fontSize: "20px" }}></PhoneIcon> Call
          </div>
          <div className="min-w-[80px] flex justify-center items-center text-[#545454] p-2 border gap-1 text-sm">
            <AccountCircleIcon sx={{ fontSize: "20px" }}></AccountCircleIcon>
            Profile
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#EFF2F7] w-[100%] border pt-2">
        <div className="m-2 bg-white rounded-lg p-4 ">
          <div className="font-semibold text-lg">Customer details</div>
          <div className="grid grid-cols-2 gap-2 mt-2 break-words">
            <div className="text-gray-500">Email</div>
            <div className="text-right font-semibold 	">amit@richpanel.com</div>
            <div className="text-gray-500">First Name</div>
            <div className="text-right  font-semibold">Amit</div>
            <div className="text-gray-500">Last Name</div>
            <div className="text-right  font-semibold">RG</div>
          </div>
          <div className="mt-3 cursor-pointer text-[blue] text-sm">
            View more details
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
