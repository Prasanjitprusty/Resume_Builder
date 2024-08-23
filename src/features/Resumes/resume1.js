import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

export default function Resume1() {
  const personalInformation = useSelector(
    (state) => state.userDetails.personalInformation
  );
  const workExperience = useSelector(
    (state) => state.userDetails.workExperience
  );

  const educationDetails = useSelector((state) => state.userDetails.education);

  const skills = useSelector((state) => state.userDetails.skills);

  console.log("Personal Information in Preview:", personalInformation);
  console.log("Work Experience in Preview:", workExperience);
  console.log("Education Details in Preview:", educationDetails);
  console.log("Skills in Preview:", skills);

  return (
    <div className="flex">
      {/* Left Section: Personal Info and Key Skills */}
      <div className="flex flex-col justify-start items-center m-4 p-4 h-1/2 bg-gray-300 rounded-lg">
        <div
          className="flex justify-center items-center rounded-full bg-white"
          style={{
            width: 180, // Outer circle width
            height: 180, // Outer circle height
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150 }} // Inner circle (Avatar) size
            src={personalInformation.profilePhoto}
          />
        </div>
        <label className="mb-2 mt-4 text-2xl font-extralight tracking-widest underline">
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

        {/* Key Skills */}
        <label className="flex justify-center mt-20 px-16 text-2xl font-extralight leading-loose tracking-widest bg-black text-white mx-8 items-center">
          Key Skills
        </label>
        <div className="mt-4">
          {skills.length > 0 ? (
            <ul className="list-disc pl-6">
              {skills.map((items, idx) => (
                <div key={idx} className="text-base font-bold">
                  Skill-{idx + 1}:
                  <span className="text-sm font-mono tracking-widest ">
                    {" "}
                    {items.skill}
                  </span>
                </div>
              ))}
            </ul>
          ) : (
            <p className="text-sm font-serif">No skills added.</p>
          )}
        </div>
      </div>

      {/* Right Section: Objective, Work Experience, and Education Details */}
      <div className="flex-1 w-auto h-auto my-4 rounded-lg mr-5 bg-gray-100">
        <div className="text-sm font-serif">
          <div className="flex flex-col mt-5 mx-8">
            <h1 className="ms-5 tracking-widest leading-loose font-serif font-semibold text-4xl">
              {personalInformation.firstName}
            </h1>
            <h1 className="ms-5 tracking-widest leading-loose font-serif font-extralight text-4xl">
              {personalInformation.lastName}
            </h1>
            <h1 className="ms-5 tracking-tighter leading-loose font-mono text-lg">
              {personalInformation.position}
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

        {/* Work Experience */}
        <label className="flex block justify-center mt-5 text-2xl font-extralight leading-loose tracking-widest underline bg-black text-white mx-8 items-center">
          Work Experience
        </label>

        <div className="border rounded-lg mx-11 p-6 mt-4">
          {workExperience.map((items, idx) => (
            <div key={idx} className="mt-4">
              <h3 className="font-bold text-2xl tracking-widest underline">{`Company-${
                idx + 1
              }`}</h3>

              <div className="text-base tracking-widest font-semibold mt-2">
                {`Job Title-${idx + 1}:`}
                <span className="font-mono tracking-widest font-extralight text-sm">
                  {" "}
                  {items.jobTitle}
                </span>
              </div>

              <div className="text-base tracking-widest font-semibold mt-2">
                {`OrganizationName-${idx + 1}:`}
                <span className="font-mono tracking-widest font-extralight text-sm">
                  {" "}
                  {items.organizationName}
                </span>
              </div>

              <div className="text-base mt-2 tracking-widest">
                <span className="text-base font-semibold">
                  Date Of Joining:
                </span>
                {` ${items.startYear}-to-${items.endYear}`}
              </div>
            </div>
          ))}
        </div>

        {/* Education Details */}
        <label className="flex block justify-center mt-5 text-2xl font-extralight leading-loose tracking-widest underline bg-black text-white mx-8 items-center">
          Education Details
        </label>

        <div className="border rounded-lg mx-11 p-6 mt-4">
          {educationDetails.map((items, idx) => (
            <div key={idx} className="mt-4">
              <h3 className="font-bold text-2xl tracking-widest underline">{`Educational Details-${
                idx + 1
              }`}</h3>

              <div className="text-base tracking-widest font-semibold mt-2">
                {`Type-${idx + 1}:`}
                <span className="font-mono tracking-widest font-extralight text-sm">
                  {items.type}
                </span>
              </div>

              <div className="text-base tracking-widest font-semibold mt-2">
                {`University-${idx + 1}:`}
                <span className="font-mono tracking-widest font-extralight text-sm">
                  {items.university}
                </span>
              </div>

              <div className="text-base mt-2 tracking-widest">
                <span className="text-base font-semibold">
                  Date Of Joining:
                </span>
                {` ${items.startYear}-to-${items.endYear}`}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
