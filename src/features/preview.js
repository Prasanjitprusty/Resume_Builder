import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

export default function Preview() {
  const personalInformation = useSelector(
    (state) => state.userDetails.personalInformation
  );
  const workExperience = useSelector(
    (state) => state.userDetails.workExperience
  );

  console.log("Personal Information in Preview:", personalInformation); // Log the state to verify
  console.log("Work Experience in Preview:", workExperience);

  return (
    <div className="flex">
      <div className="flex flex-col justify-start items-center m-4 p-4 bg-gray-300 rounded-lg">
        <Avatar
          sx={{ width: 80, height: 80 }}
          className="mb-4"
          src={personalInformation.profilePhoto}
        />
        <label className="mb-2 text-2xl font-extralight tracking-widest underline">
          PERSONAL INFO
        </label>

        {/* Name */}
        <div className="flex flex-col items-start space-y-2">
          <div className="text-sm font-serif">
            <div className="flex">
              <span className="font-mono text-lg">Name: </span>
              <span className="ml-2">{`${personalInformation.firstName} ${personalInformation.lastName}`}</span>
            </div>
          </div>

          {/* Address */}
          <div className="text-sm font-serif">
            <div className="flex">
              <span className="font-mono text-lg">Address: </span>
              <span className="ml-2">{personalInformation.address}</span>
            </div>
          </div>

          {/* PinCode */}
          <div className="text-sm font-serif">
            <div className="flex">
              <span className="font-mono text-lg">PinCode: </span>
              <span className="ml-2">{personalInformation.pincode}</span>
            </div>
          </div>

          {/* Email */}
          <div className="text-sm font-serif">
            <div className="flex">
              <span className="font-mono text-lg">Email: </span>
              <span className="ml-2">{personalInformation.email}</span>
            </div>
          </div>

          {/* Mobile */}
          <div className="text-sm font-serif">
            <div className="flex">
              <span className="font-mono text-lg">Mobile: </span>
              <span className="ml-2">{personalInformation.mobile}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 w-auto h-auto bg-gray-100">
        <div className="text-sm font-serif">
          <div className="flex flex-col mt-5 mx-8">
            <h1 className="ms-5 tracking-widest leading-loose font-serif font-semibold text-4xl">
              {personalInformation.firstName}
            </h1>
            <h1 className="ms-5 tracking-widest leading-loose font-serif font-extralight text-4xl">
              {personalInformation.lastName}
            </h1>
          </div>
        </div>

        {/* Objective */}
        <label className="flex justify-center mt-5 text-2xl font-extralight leading-loose tracking-widest underline bg-black text-white mx-8 items-center">
          Objective
        </label>
        <div className="border rounded-lg mx-11 p-6 mt-4">
          {personalInformation.objective}
        </div>

        {/* WorkExperience */}
        <label className="flex block justify-center mt-5 text-2xl font-extralight leading-loose tracking-widest underline bg-black text-white mx-8 items-center">
          Work Experience
        </label>
        {workExperience && workExperience.jobTitle ? (
  <div className="border rounded-lg mx-11 p-6 mt-4">
    {workExperience.jobTitle}
  </div>
) : (
  <div className="border rounded-lg mx-11 p-6 mt-4 text-gray-500">
    No Job Title Available
  </div>
)}

      </div>
    </div>
  );
}
