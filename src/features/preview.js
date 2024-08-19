import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

export default function Preview() {
  const personalInformation = useSelector((state) => state.userDetails.personalInformation);

  console.log("Personal Information in Preview:", personalInformation); // Log the state to verify

  return (
    <div className="flex col justify-start m-4 bg-gray-300">
      <Avatar
        sx={{ width: 80, height: 80 }}
        className="cursor-pointer"
        src={personalInformation.profilePhoto}
      />
      <label>PERSONAL INFO</label>
      <div className="flex flex-wrap">
        <div className="w-auto h-auto text-sm">{personalInformation.firstName}</div>
        <div className="w-auto h-auto text-sm">{personalInformation.lastName}</div>
      </div>
      <div className="flex-wrap mt-4">
        <div className="w-auto h-auto">{`Address-${personalInformation.address}`}</div>
        <div className="w-auto h-auto">{`PinCode-${personalInformation.pincode}`}</div>
      </div>
      <div className="flex-wrap mt-4">{personalInformation.email}</div>
      <div className="flex-wrap mt-4">{personalInformation.mobile}</div>
    </div>
  );
}
